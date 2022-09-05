import { keys } from './keys';

function _getAllKeys(object: any): (string | symbol)[] {
  return [...keys(object), ...Object.getOwnPropertySymbols(object)];
}

export { _getAllKeys };
