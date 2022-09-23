import fs from 'fs';
import path from 'path';

import {
  camelizeAll,
  executePrettier,
  extractOneColor,
  get__dirname,
  getSrcDir,
  getVersion,
  kebabToPascalCase,
} from './utils.js';
import { runCreateIndexTs } from './createIndexTxs.js';
import { runCreateReadme } from './createReadme.js';

/**
 * @todo
 * 1. 사이즈가 없을경우 에러를 throw 하지 말고, 타입체킹으로 관리하도록 한다.
 * 2. 주석으로 설명한다.
 * */

const getSizes = (() => {
  const memo = new Map();
  return (values) => {
    const key = values[0].key;
    if (memo.has(key)) {
      return memo.get(key);
    }
    const sizeSet = new Set(values.map(({ size }) => size));
    memo.set(key, [...sizeSet.values()]);
    return memo.get(key);
  };
})();

/**
 * values: {
 * key:string;
 * size:'16'|'20'|'24'|'32'|'40';
 * id:string;
 * svgText:string
 * colorCount: 'one' | 'two'
 * }[]
 * */
const templateSvgComponentTsx = (values) => {
  return `
${importTemplate().trim()}
${headerTemplate(values).trim()}
${bodyTemplate(values).trim()}
${tailTemplate(values).trim()}
`.trim();
};
const importTemplate = () =>
  `
import React from 'react';
import { convertIcon } from '../component/Icon';
`.trim();

const headerTemplate = (values) => {
  const sizes = getSizes(values);
  const has20Size = sizes.includes('20');

  const interfacesBySizeTemplate = (sizes) => {
    const fragmentTemplate = (size) => {
      return `
      interface OverrideIconSize${size} {
        size${size === '20' ? '?' : ''}: '${size}';
      };
      `.trim();
    };

    return `
    ${sizes.map(fragmentTemplate).join('\n')}
    type OverrideIconSize = ${sizes.map((size) => `OverrideIconSize${size}`).join(' | ')};
  `;
  };
  const sizePropsTemplate = (sizes, has20Size) =>
    `
  ${has20Size ? "size = '20'," : 'size,'}
  `.trim();

  const onlySizePropsHeaderTemplate = () =>
    `
const SvgComponent = ({
${sizePropsTemplate(sizes, has20Size)}
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
`.trim();

  const sizeAndColorPropsHeaderTemplate = (defaultColor) =>
    `
const SvgComponent = ({
${sizePropsTemplate(sizes, has20Size)}
  color = '${defaultColor}',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
`.trim();

  return `
  
  ${interfacesBySizeTemplate(sizes)}
  ${
    values[0].colorCount === 'one'
      ? sizeAndColorPropsHeaderTemplate(extractOneColor(values)).trim()
      : onlySizePropsHeaderTemplate().trim()
  }
    `;
};

const bodyTemplate = (values) => {
  const colorCount = values[0].colorCount;
  /**
   * camelizeAll 하는 이유는 react component 로 만들어야하기 때문에
   *  */
  const commonTemplate = (aSize, aSvgText) =>
    `
  if(size === '${aSize}'){
      return (${camelizeAll(aSvgText)})
      }`.trim();

  if (colorCount === 'two') {
    return values
      .map(({ size, svgText }) => commonTemplate(size, svgText).trim())
      .join('\n')
      .trim();
  }
  if (colorCount === 'one') {
    const color = extractOneColor(values);
    return values
      .map(({ size, svgText }) => {
        // color 가 있을 때 인자로 받아야하기 때문에
        const replacedSvgText = svgText
          .replaceAll(`fill="${color}"`, 'fill={color}')
          .replaceAll(`fill='${color}'`, 'fill={color}')
          .replaceAll(`stroke="${color}"`, 'stroke={color}')
          .replaceAll(`stroke='${color}'`, 'stroke={color}')
          .trim();

        return commonTemplate(size, replacedSvgText).trim();
      })
      .join('\n')
      .trim();
  }
  throw new Error('bodyTemplate 에서 colorCount 가 의도한 값이 아닙니다.');
};
const tailTemplate = (values) => {
  const key = values[0].key;
  const sizes = getSizes(values);
  const hasChangeableColor = values[0].colorCount === 'one';
  const has20Size = sizes.includes('20');

  return `
  return (<div></div>)
  }
  /**
  * 컬러 주입 가능여부: ${hasChangeableColor ? '가능' : '불가능'}, 
  * ${hasChangeableColor ? `기본컬러:${extractOneColor(values)}` : ''}
  * 사용가능한 사이즈는 ${sizes.sort().join(', ')} 입니다.
  * ${!has20Size ? '20(디폴트)사이즈가 없으므로 size prop은 required 입니다.' : ''}
  */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, '${key.replaceAll('/', '-')}');
export default IconComponent;
  `.trim();
};
const decorateBackupIcons = (callback) => {
  // 백업
  const rmFolderSync = (dir) => fs.rmSync(dir, { recursive: true, force: true });

  function copyFolderSync(from, to) {
    try {
      if (fs.readdirSync(to)) {
        rmFolderSync(to);
      }
    } catch (e) {
      console.log('기존에 해당폴더가 없습니다.');
    }
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach((element) => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
        fs.copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyFolderSync(path.join(from, element), path.join(to, element));
      }
    });
  }

  const to = `${getSrcDir()}/iconsBackup_${new Date().toISOString().slice(0, 10)}`;

  copyFolderSync(`${getSrcDir()}/icons`, to);
  try {
    callback();
    // readme 만들고 문제 없으면
    // 백업 삭제
    rmFolderSync(to);
  } catch (e) {
    // 에러가 발생하면 백업한 부분은 남김
    console.error(e);
  }
};

const createIcons = () => {
  const maps = fs.readFileSync(`${get__dirname()}/parsedFigma.json`, { encoding: 'utf-8' });
  const obj = JSON.parse(maps);

  Object.entries(obj).forEach(([key, values]) => {
    // 파일 만들기
    fs.writeFileSync(
      `${getSrcDir()}/icons/Icon${kebabToPascalCase(key.replaceAll('/', '-'))}.tsx`,
      templateSvgComponentTsx(values),
    );
    console.log(key, 'create done');
  });
};

/**
 * 버전올리는 작업은 여기서만 해야하기 때문에 utils 에 넣지 않음
 * */
const increaseVersion = () => {
  const versionList = getVersion().split('.');
  const updatedVersionList = [...versionList.slice(0, 2), (Number(versionList[2]) + 1).toString()];
  fs.writeFileSync(getVersion.VERSION_PATH, updatedVersionList.join('.'));
};

try {
  decorateBackupIcons(() => {
    createIcons();
    runCreateIndexTs();
    increaseVersion();
    runCreateReadme();
  });
} catch (e) {
  console.log(e);
}

// 프리티어해서 이뻐짐
executePrettier(`${getSrcDir()}/icons`);
