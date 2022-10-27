import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'svg-parser';
import { exec } from 'child_process';
import fs from 'fs';

export const camelizeAll = (s) => s.replaceAll(/-./g, (x) => x[1].toUpperCase());

export function kebabToPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase();
}

export function extractOneColor(values) {
  const res = values.map(({ svgText }) => {
    // 파싱
    const parsedSvg = parse(svgText);

    //  color 축출
    const res1 = extractProperties('fill', parsedSvg);
    const res2 = extractProperties('stroke', parsedSvg);
    const colorSet = new Set([...res1, ...res2]);
    colorSet.delete('none');

    // 한개의 컬러만 남아있다는 가정하에 동작하는 코드이므로 첫번째 결과만 반환
    return [...colorSet.values()][0];
  });

  // map의 결과이기 때문에 이하 동문
  return res[0];
}
/**
 * svg tree 에서 properties 에 존재하는 모든 키를 순회하여,
 * targetKey 에 해당하는 값을 모두 추출하여 리스트로 반환
 *
 * ex)
 *  const tree = {
 *    properties:{
 *      key1:'someThing',
 *       key2:2
 *    }
 *  }
 *  extractProperties('key1',tree) // 'someThing'
 *  extractProperties('key2',tree) // 2
 *
 *
 * */
function extractProperties(targetKey, obj) {
  const set = new Set();
  const rec = (obj) => {
    if (obj.properties) {
      Object.keys(obj.properties)
        .filter((key) => key === targetKey)
        .forEach((key) => set.add(obj.properties[key]));
    }
    if (obj.children.length > 0) {
      obj.children.forEach(rec);
    }
  };
  rec(obj);
  return [...set.values()];
}

/**
 * deprecated
 * parse 된 svg 트리를 다시 svg text 형식으로 변환하는 로직
 * */
function createSvg(obj) {
  if (obj.children.length === 0) {
    return `<${obj.tagName} ${Object.entries(obj.properties)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')}
    />`;
  }

  const createFirst = (tagName, properties) => {
    return `
    <${tagName} ${Object.entries(properties ?? {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')}
    >`;
  };

  const createTail = (tagName) => `</${tagName}>`;

  const body = obj.children.map((anObj) => createSvg(anObj)).join('\n');
  if (obj.type === 'root') {
    return body;
  }
  return `${createFirst(obj.tagName, obj.properties)}\n${body}\n${createTail(obj.tagName)}`;
}

/**
 * 해당 유틸함수는 동일한 부모의 폴더에서만 사용해야함.
 * ex) utils.js 가 fileGenerators 폴더 안에 있으므로 __dirname 은  fileGenerators 이다.
 * */
export const get__dirname = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

export const getSrcDir = () => `${get__dirname()}/../../packages/nu-icons/src`;

/**
 * prettier 실행 함수
 * */
export const executePrettier = (absolutePath) => {
  exec(`prettier --write ${absolutePath}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`\n\n------stdout------\n\n${stdout}`);
  });
};

// 0.1.xx
const VERSION_PATH = `${get__dirname()}/version.txt`;
export const getVersion = () => fs.readFileSync(VERSION_PATH).toString();
getVersion.VERSION_PATH = VERSION_PATH;

export const sleep = (ms = 60 * 1000) => new Promise((res) => setTimeout(res, ms));



/**
 * 단위시간당 limit call이 정해져있는 api를 한번에 여려개 호출할 때 필요한 함수
 * figma get api 의 경우 디도스 공격을 제한하기 위해 1분에 최대 60~70회 정도의 콜을 수용하고 1분의 쿨다운이 필요함.
 * */
export const runPromisesUntilAllSuccess = async (data, promisify, options = {
  limitedRetryCount: 3,
  currentRetryCount: 0,
  delaySeconds: 60,
}) => {
  const promises = data.map(promisify);
  const res = await Promise.allSettled(promises);
  const rejectResults = res.map((item, idx) => ({ ...item, idx })).filter(({ status }) => status === 'rejected');
  const fulfilledResults = res.filter(({ status }) => status === 'fulfilled');
  ;
  
  if (rejectResults.length === 0) {
    return fulfilledResults;
  }
  if (options.currentRetryCount >= options.limitedRetryCount) {
    throw new Error('제한한 시도횟수보다 더 많은 재시도를 했습니다.');
  }
  const rejectIndexes = rejectResults.map((item) => item.idx);
  const willRetryData = data.filter((item, idx) => rejectIndexes.includes(idx));
  
  await sleep(1000 * options.delaySeconds);
  
  return [...fulfilledResults, ...await runPromisesUntilAllSuccess(willRetryData, promisify, {
    ...options,
    currentRetryCount: options.currentRetryCount + 1,
  })];
  
  
};
