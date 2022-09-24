import fs from 'fs';
import fetch from 'node-fetch';
import { get__dirname, runPromisesUntilAllSuccess } from './utils.js';

/**
 * 현재 진행상황을 추적하는 함수
 * */
const logForCheckProcess = (aSet, aData) => fn => (...args) => {
  return fn(...args)
  .then(item => {
    aSet.add(item.id);
    console.log(`${aSet.size.toString()}/${aData.length}`);
    return item;
  });
  
};

/**
 * 검증을 위한 코드
 * log for debugFailMap 과 추후에 비교하기 위해 남겨놓기 위해 데이터를 수집하는 용도.
 * */
const collectSuccessLog = (aDebugSuccessMap) => fn => (...args) => {
  
  return fn(...args).then(item => {
    aDebugSuccessMap.set(item.id.toString(), (aDebugSuccessMap.get(item.id.toString()) ?? 0) + 1);
    return item;
  });
};

/**
 * 검증을 위한 코드
 * log for debugSuccessMap 과 추후에 비교하기 위해 남겨놓기 위해 데이터를 수집하는 용도.
 * */

const collectFailLog = (aDebugFailMap) => fn => (...args) => {
  
  return fn(...args).catch(e => {
    const item = args[0];
    aDebugFailMap.set(item.id.toString(), {
      cnt: (aDebugFailMap.get(item.id.toString()).cnt ?? 0) + 1,
      errorMessage: JSON.stringify(e),
    });
    throw new Error(e);
    
  });
};
/**
 * 'Rectangle 270' 이런식의 아이템은 빼야함
 * */
const isRectangle = (name) => {
  return name.includes('Rectangle') && Number.isInteger(Number(name.split(' ')[1]));
};

const getIconsIdAndNameList = async (fileId = 'mEP5h03npmCq01GPdpGHjO', nodeId = '7%3A107') => {
  const res = await fetch(
    `https://api.figma.com/v1/files/${fileId}/nodes?ids=${nodeId}&format=svg`,
    {
      headers: {
        'X-Figma-Token': process.env.X_FIGMA_TOKEN,
      },
    },
  );
  if (res.ok) {
    const data = await res.json();
    const children = data.nodes[decodeURIComponent(nodeId)].document.children;
    if (!children) {
      throw new Error('아이콘 fetch 경로가 잘못되어있습니다.');
    }
    return children
      .filter(({ type }) => type === 'COMPONENT')
      .filter(({ name }) => !isRectangle(name))
      .map((item) => ({ id: item.id, name: item.name }));
  }
  throw new Error('피그마 파일정보 가져오는데 문제 있음');
};

const appendFileMapForSize = ({ key, size, id, fileMap, ...rest }) => {
  if (fileMap.has(key)) {
    const res = fileMap.get(key);
    res.push({ key, size, id, ...rest });
    fileMap.set(key, res);
  } else {
    fileMap.set(key, [{ key, size, id, ...rest }]);
  }
  return fileMap
};
const fetchSvgText = async (id) => {
  /**
   *  {
   *     err: null,
   *     images: {
   *       '997:2893': 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85af6f24-4450-4c30-86cd-c81b2eccd0f8'
   *     }
   *   },
   * */
  
  const fetchSvg = () => fetch(
    `https://api.figma.com/v1/images/mEP5h03npmCq01GPdpGHjO?ids=${encodeURIComponent(
      id,
    )}&format=svg`,
    {
      headers: {
        'X-Figma-Token': process.env.X_FIGMA_TOKEN,
      },
    },
  );
  const res = await fetchSvg();
  if (!res.ok) {
    console.error(`[fetchSvgText:error]`, res.statusText, id);
    throw new Error(`[fetchSvgText:error] ${id}, ${res.statusText}, ${res.status}`);
  }
  const svgUrlData = await res.json();
  const svgRes = await fetch(Object.values(svgUrlData.images)[0]);

  if (!svgRes.ok) {
    console.error(svgRes.statusText);
  
    // throw new Error('imageUrl fetch error');
  }
  const svgText = svgRes.text();
  return svgText;
};

/**
 * 디자이너와 협의한 내용
 * name/state/size/colorCount(optional)
 * name: 아이콘이 될 수 있는 이름
 * state: 아이콘이 될 수 있는 상태(기본은 default)
 * size: 사이즈 ('16','20','24','32','40')
 * colorCount: 기본컬러의 갯수, 종류가 하나라면, 빈값이다.
 *
 * */
const nameParser = (name) => {
  const [key, state, size, colorCount] = name.split('/');

  // 컴포넌트 이름을 IconKeyState
  if (state === 'default') {
    return {
      key,
      size,
      colorCount: colorCount ? colorCount : 'one',
    };
  }
  
  return {
    key: `${key}/${state}`,
    size,
    colorCount: colorCount ? colorCount : 'one',
  };
};

const getFigmaObjSources = (aFileMap, theFiles) => {
  theFiles.forEach(({ id, name }) => {
    try {
      appendFileMapForSize({ ...nameParser(name), id, fileMap: aFileMap });
    } catch (e) {
      console.log(e);
    }
  });
  
  return [...aFileMap.values()]
  .map((lis) => {
    return lis.map((item) => ({ ...item, fetcher: () => fetchSvgText(item.id) }));
  })
  .flat();
  
  
};

(async () => {
  if (!process.env.X_FIGMA_TOKEN) {
    // export X_FIGMA_TOKEN='{{피그마_토큰}}'
    throw new Error('토큰 설정해주세요.');
  }
  const files = await getIconsIdAndNameList();
  
  const figmaSources = getFigmaObjSources(new Map(), files);
  
  
  /**
   * data를 순회하면서 svgText fetcer를 요청하는 함수
   * pigma obj를 만들기 위해 수집하는
   * */
  const promisify = async (item, idx) => {
    try {
      const svgText = await item.fetcher();
      
      return { ...item, svgText };
      
    } catch (e) {
      console.log(`promise:error`, { idx, id: item.id });
      throw new Error(e);
    }
  };
  
  const debugSuccessMap = new Map();
  const debugFailMap = new Map();
  
  
  const loggerForCheckProcess = logForCheckProcess(new Set(), figmaSources);
  const loggerForSuccess = collectSuccessLog(debugSuccessMap);
  const loggerForFail = collectFailLog(debugFailMap);
  
  const logger = (fn) => {
    return loggerForCheckProcess(loggerForSuccess(loggerForFail(fn)));
  };
  const figmaResolvedList = await runPromisesUntilAllSuccess(figmaSources, logger(promisify));
  
  // svgText + key + size 생성
  const figmaMetaMap = figmaResolvedList.reduce((aMap,item) => {
    appendFileMapForSize({ ...item, fileMap: aMap });
    return aMap
  }, new Map());
  console.log(debugFailMap);
  console.log(debugSuccessMap);
  
  fs.writeFileSync(
    `${get__dirname()}/fail.json`,
    JSON.stringify(Object.fromEntries(debugFailMap)),
    (e) => {
      if (e) {
        console.log(`fs`, e);
      }
    },
  );
  fs.writeFileSync(
    `${get__dirname()}/success.json`,
    JSON.stringify(Object.fromEntries(debugSuccessMap)),
    (e) => {
      if (e) {
        console.log(`fs`, e);
      }
    },
  );
  fs.writeFileSync(
    `${get__dirname()}/parsedFigma.json`,
    JSON.stringify(Object.fromEntries(figmaMetaMap)),
    (e) => {
      if (e) {
        console.log(`fs`, e);
      }
    },
  );
  console.log('done');
})();


