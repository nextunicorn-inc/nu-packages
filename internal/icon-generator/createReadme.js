import fs from 'fs';
import {
  kebabToPascalCase,
  get__dirname,
  getSrcDir,
  executePrettier,
  getVersion,
} from './utils.js';

export const runCreateReadme = () => {
  // 버전관리...
  // 1. new 와 intersectionToLower 의 여집합 -> 새로 추가된 것
  // 2. new 와 old 교집합 -> 기존에 있던것 (사이즈와 컬러변경가능 여부 표현 필요)
  // 3. new 와 old 의 toLower 교집합 -> readme 에 표현할 변경사항
  // 4. old 와 intersectionToLower 의 여집합 -> 피그마에는 없지만 남아있는 것(앞으로 정리할 것) + 1번에서 이룸이 완전 바뀐 것 -> 수동으로 제거할 것

  /**
   * 1,2번 탬플릿
   * 이름 / 가능한 사이즈 / 컬러변경 여부
   * */

  /**
   * 3번 템플릿
   * <div style="display: flex;  justify-content: space-around">
   *     <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
   *         <h3>Before</h3>
   *         <span>b</span>
   *         <span>b</span>
   *     </div>
   *     <div style="display: flex; align-items: center" >-></div>
   *     <div>
   *         <h3>Now</h3>
   *         <span>a</span>
   *     </div>
   * </div>
   * */

  const getOldFileNames = () => {
    const oldFileNames = fs.readdirSync(
      `${getSrcDir()}/iconsBackup_${new Date().toISOString().slice(0, 10)}`,
    );
    return oldFileNames.filter((fileName) => fileName !== 'index.ts');
  };
  const getFigmaObj = (() => {
    let obj;
    if (!obj) {
      const maps = fs.readFileSync(`${get__dirname()}/parsedFigma.json`, { encoding: 'utf-8' });
      obj = JSON.parse(maps);
    }
    return ()=> obj;
  })();

  const getNewFileCollection = () => {
    const figmaObj = getFigmaObj();
    const newFileMetas = Object.keys(figmaObj).map((key) => ({
      fileName: `Icon${kebabToPascalCase(key.replaceAll('/', '-'))}.tsx`,
      colorCount: figmaObj[key][0].colorCount,
      size: figmaObj[key].map((item) => item.size),
    }));
    return { fileNames: newFileMetas.map((item) => item.fileName), metas: newFileMetas };
  };

  // 새로 만들어진 파일
  const oldFileNames = getOldFileNames();
  const newFileNames = getNewFileCollection().fileNames;

  const intersection = oldFileNames.filter((oldFileName) => newFileNames.includes(oldFileName));
  const intersectionByToLower = oldFileNames.filter((oldFileName) =>
    newFileNames.map((a) => a.toLowerCase()).includes(oldFileName.toLowerCase()),
  );

  const IconTemplate = ({ fileName, size }) => {
    return `
  - ${fileName} / size: ${size.sort().join(', ')}   
  `.trim();
  };

  const headTemplate = () =>
    `
# nu-icons ver. ${getVersion()}
> 넥스트유니콘 아이콘 패키지

기본적으로 파스칼 케이스로 정의되었습니다.

\`\`\`
- 예) IconAlert
\`\`\`

## 아이콘 설명
> default : 20

## Notice

- 기존 아이콘 사용시, size props 에 아무 값도 넣지 않는다면 자체 default size를 반환하였습니다.
- 해당 동작은 개발자가 예상하기 힘드므로 0.1.xx버전 이후부터는 아이콘 size가 20이 없을 경우 타입에러를 반환합니다.
- 가능한 사용하고자 하는 아이콘의 사이즈를 프롭에 주입해주세요.
`.trim();

  // 완전 새로 생성된
  const brandNewFileMetas = getNewFileCollection().metas.filter(
    ({ fileName: aFileName }) =>
      !intersectionByToLower
        .map((aFileName) => aFileName.toLowerCase())
        .includes(aFileName.toLowerCase()),
  );

  const colorFixedAndChangeableList = (fileMetas) => {
    const colorChangeableIcons = fileMetas.filter(({ colorCount }) => colorCount === 'one');
    const colorFixedIcons = fileMetas.filter(({ colorCount }) => colorCount !== 'one');

    return `
### 색상 변경 가능
${colorChangeableIcons
  .sort((a, b) => (a.fileName < b.fileName ? -1 : 1))
  .map(IconTemplate)
  .join('\n')
  .trim()}

### 색상 변경 불가능
${colorFixedIcons
  .sort((a, b) => (a.fileName < b.fileName ? -1 : 1))
  .map(IconTemplate)
  .join('\n')
  .trim()}
  `.trim();
  };

  // 1.Brand New Icons
  const realNewFilesTemplate = (fileMetas) => {
    return `
## 1.Brand New Icons
> 이전버전에는 없었던 새로운 아이콘
${colorFixedAndChangeableList(fileMetas)}
`;
  };

  const maintainedFileMetas = getNewFileCollection().metas.filter(({ fileName }) =>
    intersectionByToLower.map((a) => a.toLowerCase()).includes(fileName.toLowerCase()),
  );

  // 2.기존유지되는 것
  const maintainedFileNamesTemplate = (fileMetas) => {
    return `
## 2. 기존유지되는 것
  
${colorFixedAndChangeableList(fileMetas)}
  `;
  };
  const getOverlappedCollection = () => {
    const overlappedFileNames = intersectionByToLower
      .map((a) => a.toLowerCase())
      .filter((aFileName) => !intersection.map((a) => a.toLowerCase()).includes(aFileName));

    // 겹치는 새거
    const overlappedNewFilenames = getNewFileCollection().fileNames.filter((aFileName) =>
      overlappedFileNames
        .map((aFileName) => aFileName.toLowerCase())
        .includes(aFileName.toLowerCase()),
    );
    // 겹치는 이전거
    const overlappedOldFilenames = oldFileNames.filter((aFileName) =>
      overlappedFileNames
        .map((aFileName) => aFileName.toLowerCase())
        .includes(aFileName.toLowerCase()),
    );

    return {
      overlappedNewFilenames,
      overlappedOldFilenames,
    };
  };
  // 3.대소문자 변경된 사항
  const onlyLetterChangedFileNamesTemplate = ({
    overlappedOldFilenames,
    overlappedNewFilenames,
  }) => {
    return `
## 3.대소문자 변경된 사항
<div style="display: flex;  justify-content: space-around">
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
    <h3>Before</h3>
    ${overlappedOldFilenames
      .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
      .map((fileName) => `<span>${fileName}</span>`)
      .join('\n    ')}      
  </div>
  <div style="display: flex; align-items: center" >-></div>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
    <h3>Now</h3>
    ${overlappedNewFilenames
      .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
      .map((fileName) => `<span>${fileName}</span>`)
      .join('\n    ')}      
  </div>
</div>
  `.trim();
  };

  const onlyOldFileNames = oldFileNames.filter(
    (fileName) =>
      !intersectionByToLower.map((a) => a.toLowerCase()).includes(fileName.toLowerCase()),
  );

  // # 4. 피그마 아이콘 리스트에 없는 자원
  const noInFigmaFileNamesTemplate = (fileNames) => `
## 4. 피그마 아이콘 리스트에 없는 자원
> 곧 지워질 수 도 있는 아이콘

<div style="display: flex; flex-direction: column; justify-content: start; align-items: start">
  ${fileNames
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    .map((elText) => `<span style="color: coral">  - ${elText}</span>`)
    .join('\n  ')}
</div>
<br/>
<br/>
`;

  const makeReadme = () =>
    `
${headTemplate()}
${realNewFilesTemplate(brandNewFileMetas)}
${maintainedFileNamesTemplate(maintainedFileMetas)}
${onlyLetterChangedFileNamesTemplate(getOverlappedCollection())}
${noInFigmaFileNamesTemplate(onlyOldFileNames)}
`.trim();

  fs.writeFileSync(`${get__dirname()}/README.md`, makeReadme(),(e)=> {
    if (e) console.error(e);
  });
  executePrettier(`${get__dirname()}/README.md`);
};
