import { GenericObject } from '@nextunicorn/types';
import objectAsArray from './objectAsArray';
import toLowerCaseStart from './toLowerCaseStart';

/**
 *
 * @param object
 * @param targetKey
 */
const detachPrefixByKey = (
  object: GenericObject<unknown>,
  targetKey: string,
): Record<string, string> =>
  objectAsArray(object).reduce((result, [key, value]) => {
    const nextKey = toLowerCaseStart(key.replace(targetKey, ''));
    return { ...result, [nextKey]: value };
  }, {});

export default detachPrefixByKey;
