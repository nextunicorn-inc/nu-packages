import { identity } from './identity';
import { iteratee } from './iteratee';
import { values } from './values';

type PropertyName = string | number | symbol;
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | Partial<T>;
type ValueIterator<T, R> = (value: T) => R;
type ValueIterateeCustom<T, R> = ValueIterator<T, R> | IterateeShorthand<T>;

function groupBy<T, R extends PropertyName>(
  collection: T[],
  predicate?: ValueIterateeCustom<T, R>,
): Record<R, T[]>;
function groupBy<R extends PropertyName>(
  collection: string,
  predicate?: ValueIterateeCustom<string, R>,
): Record<R, string[]>;
function groupBy<K extends PropertyName, V, R extends PropertyName>(
  collection: Record<K, V>,
  predicate?: ValueIterateeCustom<V, R>,
): Record<R, V>;
function groupBy<R extends PropertyName>(
  collection: any,
  predicate: ValueIterateeCustom<any, R> = identity,
): Record<R, any> {
  const iterativeFunc = iteratee(predicate);
  const result: Record<PropertyName, any> = {};
  values(collection).forEach((value) => {
    const generated = iterativeFunc(value);
    if (Object.prototype.hasOwnProperty.call(result, generated)) {
      result[generated].push(value);
    } else {
      Object.assign(result, { [generated]: [value] });
    }
  });
  return result;
}

export { groupBy };
