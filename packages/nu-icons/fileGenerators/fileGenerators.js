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
${tailTemplate(values[0].key).trim()}
`.trim();
};
const importTemplate = () =>
  `
import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';
`.trim();

const headerTemplate = (values) => {
  const onlySizePropsHeaderTemplate = () =>
    `
function SvgComponent({
  size = '20',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
`.trim();

  const sizeAndColorPropsHeaderTemplate = (defaultColor) =>
    `
function SvgComponent({
  size = '20',
  color = '${defaultColor}',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
`.trim();

  return values[0].colorCount === 'one'
    ? sizeAndColorPropsHeaderTemplate(extractOneColor(values)).trim()
    : onlySizePropsHeaderTemplate().trim();
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
const tailTemplate = (key) =>
  `
  throw new Error(\`${key}에서 size: \$\{size \} 해당 사이즈를 지원하지 않습니다.\`)
  }
const IconComponent = convertIcon(SvgComponent, '${key.replaceAll('/', '-')}');
export default IconComponent;
  `.trim();
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

  Object.entries(obj).forEach(([key, val]) => {
    // 파일 만들기
    fs.writeFileSync(
      `${getSrcDir()}/icons4/Icon${kebabToPascalCase(key.replaceAll('/', '-'))}.tsx`,
      templateSvgComponentTsx(val),
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
  decorateBackupIcons(createIcons);
  increaseVersion();
} catch (e) {
  console.log(e);
}

// 프리티어해서 이뻐짐
executePrettier(`${getSrcDir()}/icons4`);
