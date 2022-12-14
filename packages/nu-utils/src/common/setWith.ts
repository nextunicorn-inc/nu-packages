import { toPath } from './toPath';
import { first } from './first';
import { tail } from './tail';
import { isEmpty } from './isEmpty';
import { isObject } from './isObject';
import { _isIndex } from './_isIndex';

type PropertyName = string | number | symbol;
type Many<T> = T | T[];
type PropertyPath = Many<PropertyName>;
type SetWithCustomizer<T> = (nsValue: any, key: PropertyName, nsObject: T) => any;

function setWith<T>(
  object: T,
  path: PropertyPath,
  value: any,
  customizer?: SetWithCustomizer<T>,
): any {
  const formattedPath = toPath(path);
  const key = first(formattedPath);
  if (key !== undefined) {
    const resPaths = tail(formattedPath);
    if (isEmpty(resPaths)) {
      (object as any)[key] = value;
    } else {
      const objValue = (object as any)[key];
      let newValue = customizer && customizer(objValue, key, object);
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : _isIndex(first(resPaths)) ? [] : {};
      }
      (object as any)[key] = setWith(newValue, resPaths, value, customizer);
    }
  }
  return object;
}

export { setWith };
