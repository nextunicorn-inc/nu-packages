import objectAsArray from './objectAsArray';
import type { GenericObject } from '@nextunicorn-inc/nu-types';

/**
 * 오브젝트를 키 기준으로 필터링합니다.
 *
 * @param object
 * @param targetKey
 */
const filterObjectByKey = (object: GenericObject<unknown>, targetKey: string) =>
  Object.fromEntries(objectAsArray(object).filter(([key]) => key.startsWith(targetKey)));

export default filterObjectByKey;
