import { GenericObject } from '@nextunicorn-inc/nu-types';

const isEmptyObject = (object: GenericObject<unknown>) => {
  return Object.keys(object).length === 0;
};

export default isEmptyObject;
