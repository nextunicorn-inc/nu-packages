import objectAsArray from './objectAsArray';
import type { GenericObject } from '@nextunicorn/types';

/**
 * 특정 key 로 시작하는 property 제외하고 반환
 *
 * @param object
 * @param targetKeys
 */
const omitObjectByKeys = <T = unknown>(
  object: GenericObject<T>,
  targetKeys: string[],
): GenericObject<string> => {
  let result = {};
  targetKeys.forEach((targetKey) => {
    result = Object.fromEntries(
      objectAsArray(result).filter(([key]) => !key.startsWith(targetKey)),
    );
  });
  return result;
};

export default omitObjectByKeys;
