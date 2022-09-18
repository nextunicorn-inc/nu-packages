import fs from 'fs';
import fetch from 'node-fetch';
import { get__dirname } from './utils.js';

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
    const children = data.nodes['7:107'].document.children;
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

const appendFileMap = ({ key, size, id, fileMap, ...rest }) => {
  if (fileMap.has(key)) {
    const res = fileMap.get(key);
    res.push({ key, size, id, ...rest });
    fileMap.set(key, res);
  } else {
    fileMap.set(key, [{ key, size, id, ...rest }]);
  }
};
const sleep = (ms = 60 * 1000) => new Promise((res) => setTimeout(res, ms));
const fetchSvgText = async (id) => {
  /**
   *  {
   *     err: null,
   *     images: {
   *       '997:2893': 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85af6f24-4450-4c30-86cd-c81b2eccd0f8'
   *     }
   *   },
   * */
  const res = await fetch(
    `https://api.figma.com/v1/images/mEP5h03npmCq01GPdpGHjO?ids=${encodeURIComponent(
      id,
    )}&format=svg`,
    {
      headers: {
        'X-Figma-Token': process.env.X_FIGMA_TOKEN,
      },
    },
  );
  if (!res.ok) {
    console.error(res.statusText);
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

(async () => {
  if (!process.env.X_FIGMA_TOKEN) {
    // export X_FIGMA_TOKEN='{{피그마_토큰}}'
    throw new Error('토큰 설정해주세요.');
  }
  const files = await getIconsIdAndNameList();

  const fileMap = new Map();
  files.forEach(({ id, name }) => {
    try {
      appendFileMap({ ...nameParser(name), id, fileMap });
    } catch (e) {
      console.log(e);
    }
  });

  // 9개씩 묶어서 시연실행하기 위한 전처리
  const data = [...fileMap.values()]
    .map((lis) => {
      return lis.map((item) => ({ ...item, fetcher: () => fetchSvgText(item.id) }));
    })
    .flat();
  const data2 = data.reduce(
    (acc, curr) => {
      if (acc[acc.length - 1].length < 9) {
        acc[acc.length - 1].push(curr);
        return acc;
      }
      acc.push([curr]);
      return acc;
    },
    [[]],
  );
  // svgText + key + size 생성
  const newMap = new Map();

  let count = 1;
  for (const nineItems of data2) {
    const data3 = await Promise.all(
      nineItems.map(async (item) => ({ ...item, svgText: await item.fetcher() })),
    );
    data3.forEach((item) => {
      const { fetcher, ...restItem } = item;
      appendFileMap({ ...restItem, fileMap: newMap });
    });
    //figma api 에서 rate limit exceed 에러를 받지 않으려면 일정 시간을 지연해야함
    console.log(`${count}/${data2.length}`);
    count++;
    await sleep(10 * 1000);
  }

  fs.writeFileSync(
    `${get__dirname()}/parsedFigma.json`,
    JSON.stringify(Object.fromEntries(newMap)),
  );
  console.log('done');
})();
