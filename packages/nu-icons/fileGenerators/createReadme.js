import fs from 'fs';
import { kebabToPascalCase, get__dirname, getSrcDir } from './utils.js';

console.log(get__dirname());
// 0.1.xx
const VERSION_PATH = `${get__dirname()}/version.txt`;
const getVersion = () => fs.readFileSync(VERSION_PATH).toString();
const increaseVersion = () => {
  const versionList = getVersion().split('.');
  const updatedVersionList = [...versionList.slice(0, 2), (Number(versionList[2]) + 1).toString()];
  fs.writeFileSync(VERSION_PATH, updatedVersionList.join('.'));
};
console.log(getVersion().toString()); // 0.1.0
increaseVersion();
console.log(getVersion().toString()); // 0.1.1

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
const maps = fs.readFileSync(`${get__dirname()}/parsedFigma.json`, { encoding: 'utf-8' });
const obj = JSON.parse(maps);

const oldFileNames = fs.readdirSync(`${getSrcDir()}/icons`);
// console.log(oldFileNames);
const newFileNames = Object.keys(obj).map(
  (key) => `Icon${kebabToPascalCase(key.replaceAll('/', '-'))}.tsx`,
);
// console.log(newFileNames);
// 새로 만들어진 파일
const intersectionOld = oldFileNames.filter((oldFileName) => newFileNames.includes(oldFileName));
const intersectionOldByToLower = oldFileNames.filter((oldFileName) =>
  newFileNames.map((a) => a.toLowerCase()).includes(oldFileName.toLowerCase()),
);
// console.log(intersection);
// 대소문자 이름만 바뀐애들
console.log(intersectionOldByToLower.filter((a) => !intersectionOld.includes(a)));

// 기존 살아남을 애들(이름 어순이나 스펠이 다른애들 + 피그마에는 없지만 사용하고 있는 친구들)
console.log(oldFileNames.filter((oldFileName) => !intersectionOldByToLower.includes(oldFileName)));

// 새거
console.log(newFileNames.sort());
