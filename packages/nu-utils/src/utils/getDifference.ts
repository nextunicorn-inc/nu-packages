import { GenericObject } from '@nextunicorn-inc/nu-types';

const addNode = (prop: string, value: GenericObject<any> | null, parent: GenericObject<any>) => {
  parent[prop] = value;
};

const diffBasedPrev = (a: GenericObject<any>, b: GenericObject<any>, node: GenericObject<any>) => {
  for (const prop in a) {
    // @ 표시가 붙은 key는 비교하지 않습니다.
    if (!prop?.startsWith?.('@')) {
      // 해당 key가 삭제되었을 때
      if (typeof b?.[prop] === 'undefined') {
        addNode(prop, null, node);
      } else if (JSON.stringify(a[prop]) !== JSON.stringify(b[prop])) {
        // 값이 원시값일 때
        if (typeof b[prop] !== 'object' || b[prop] === null) {
          addNode(prop, b[prop], node);
        } else if (Array.isArray(b[prop])) {
          addNode(prop, b[prop], node);
        } else {
          addNode(prop, {}, node);
          diffBasedPrev(a[prop], b[prop], node[prop]);
        }
      }
    }
  }
};

const diffBasedNow = (a: GenericObject<any>, b: GenericObject<any>, node: GenericObject<any>) => {
  for (const prop in b) {
    // @ 표시가 붙은 key는 비교하지 않습니다.
    if (!prop?.startsWith?.('@')) {
      if (typeof a?.[prop] === 'undefined') {
        addNode(prop, b[prop], node);
      } else if (JSON.stringify(a[prop]) !== JSON.stringify(b[prop])) {
        if (typeof b[prop] !== 'object' || b[prop] === null) {
          addNode(prop, b[prop], node);
        } else if (Array.isArray(b[prop])) {
          addNode(prop, b[prop], node);
        } else {
          addNode(prop, {}, node);
          diffBasedNow(a[prop], b[prop], node[prop]);
        }
      }
    }
  }
};

export const getDifference = (prev: GenericObject<any>, now: GenericObject<any>) => {
  const diff: GenericObject<any> = {};
  // 기존 값에서 삭제되거나 변경된 값, 배열 같은 경우는 순서도 다르면 무조건 변경되었다고 판단
  diffBasedPrev(prev, now, diff);
  // 기존에 없던 값, 즉 새롭게 추가된 값
  diffBasedNow(prev, now, diff);
  return diff;
};

export default getDifference;
