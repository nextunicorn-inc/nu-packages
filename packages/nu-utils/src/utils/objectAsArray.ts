import type { GenericObject } from '@nextunicorn/types';

/**
 * 오브젝트를 배열로 반환합니다.
 *
 * @param object
 */
const objectAsArray = <T = unknown>(object: GenericObject<T>) => Object.entries(object);

export default objectAsArray;
