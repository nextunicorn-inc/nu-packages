import detachPrefixByKey from './detachPrefixByKey';
import filterObjectByKey from './filterObjectByKey';
import type { GenericObject } from '@nextunicorn/types';

/**
 * 특정 key 값의 prefix 를 가지고 있는 property 들만 prefix 제거 후 반환
 *
 * @param object
 * @param targetKey
 */
const getPrefixRemovedObjectByKey = <T = unknown>(object: GenericObject<T>, targetKey: string) => {
  const filtered = filterObjectByKey(object, targetKey);
  return detachPrefixByKey(filtered, targetKey);
};

export default getPrefixRemovedObjectByKey;
