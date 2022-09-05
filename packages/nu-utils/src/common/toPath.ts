import { isArray } from './isArray';
import { isSymbol } from './isSymbol';
import { toString } from './toString';

function toPath(value: any): (string | symbol)[] {
  if (isSymbol(value)) {
    return [value];
  }
  if (isArray(value)) {
    return value.map((part) => (isSymbol(part) ? part : toString(part)));
  }
  return toString(value)
    .split(/[[\]\\.]/)
    .filter((key) => key !== '');
}

export { toPath };
