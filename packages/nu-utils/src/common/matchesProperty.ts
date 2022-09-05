import { get } from './get';
import { isEqual } from './isEqual';

type PropertyName = string | number | symbol;
type Many<T> = T | T[];
type PropertyPath = Many<PropertyName>;

function matchesProperty<T, V>(path: PropertyPath, srcValue: T) {
  return function (object: V): boolean {
    return isEqual(get(object, path), srcValue);
  };
}

export { matchesProperty };
