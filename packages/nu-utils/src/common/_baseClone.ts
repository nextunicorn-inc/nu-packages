import { _baseGetTag } from './_baseGetTag';
import { _getAllKeys } from './_getAllKeys';
import { _getAllKeysIn } from './_getAllKeysIn';
import { isObject } from './isObject';
import { isArray } from './isArray';
import { isSet } from './isSet';
import { isMap } from './isMap';
import { keys } from './keys';
import { keysIn } from './keysIn';

type PropertyName = string | number | symbol;
type CloneWithCustomizer<T> = (
  value: any,
  key: PropertyName | undefined,
  object: T | undefined,
  stack: any,
) => any;

const CLONE_DEEP_FLAG = 1 << 0;
const CLONE_FLAT_FLAG = 1 << 1;
const CLONE_SYMBOLS_FLAG = 1 << 2;

// eslint-disable-next-line max-params
function _baseClone<T>(
  value: T,
  bitmask: number,
  customizer?: CloneWithCustomizer<T>,
  key?: any,
  object?: any,
  stack = new Map(),
): any {
  let result: any;
  const isDeep = bitmask & CLONE_DEEP_FLAG;
  const isFlat = bitmask & CLONE_FLAT_FLAG;
  const isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object
      ? customizer(value, key, object, stack)
      : customizer(value, undefined, undefined, stack);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  if (isArray(value)) {
    if (!isDeep) {
      return [...value];
    }
    result = new Array(value.length);
  } else {
    const tag = _baseGetTag(value);
    switch (tag) {
      case '[object Object]':
        result = Object.create(Object.getPrototypeOf(value));
        break;
      case '[object Set]':
        result = new Set();
        break;
      case '[object Map]':
        result = new Map();
        break;
      case '[object RegExp]':
        result = new RegExp((value as any as RegExp).source, (value as any as RegExp).flags);
        result.lastIndex = (value as any as RegExp).lastIndex;
        break;
      case '[object Date]':
        result = new Date((value as any as Date).valueOf());
        break;
      case '[object String]':
        result = new String(value.valueOf());
        break;
      case '[object Boolean]':
        result = new Boolean(value.valueOf());
        break;
      case '[object Number]':
        result = new Number(value.valueOf());
        break;
      case '[object Symbol]':
        result = Object(Symbol.prototype.valueOf.call(value));
        break;
      case '[object Function]':
      case '[object AsyncFunction]':
      case '[object GeneratorFunction]':
        result = object ? value : {};
        break;
      default:
        result = {};
        break;
    }
  }
  if (stack.has(value)) {
    return stack.get(value);
  }
  stack.set(value, result);
  if (isArray(value)) {
    value.forEach((subValue, index) => {
      result[index] = _baseClone(subValue, bitmask, customizer, index, value, stack);
    });
  }
  if (isSet(value)) {
    value.forEach((subValue) => {
      result.add(_baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  }
  if (isMap(value)) {
    value.forEach((subValue, key) => {
      result.set(key, _baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  const keysFunc = isFlat ? (isFull ? _getAllKeysIn : keysIn) : isFull ? _getAllKeys : keys;
  keysFunc(value).forEach((key) => {
    Object.assign(result, {
      [key]: _baseClone((value as any)[key], bitmask, customizer, key, value, stack),
    });
  });
  stack.delete(value);
  return result;
}

export { _baseClone };
