/* eslint-disable @typescript-eslint/ban-types */
import { isFunction } from './isFunction';
import { isObject } from './isObject';
import { isArray } from './isArray';
import { isNil } from './isNil';
import { identity } from './identity';
import { matchesProperty } from './matchesProperty';
import { matches } from './matches';
import { property } from './property';

type Func<TS extends any[], R> = (...args: TS) => R;

function iteratee<T extends Func<any[], any>>(func: T): T;
function iteratee(value: any): Func<any[], any>;
function iteratee(value: any): Func<any[], any> {
  if (isNil(value)) {
    return identity;
  }
  if (isFunction(value)) {
    return value;
  }
  if (isObject(value)) {
    if (isArray(value)) {
      return matchesProperty(value[0], value[1]);
    }
    return matches(value);
  }
  return property(value);
}

export { iteratee };
