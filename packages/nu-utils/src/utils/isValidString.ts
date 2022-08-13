const isValidString = (target: string | string[]): target is string => typeof target === 'string';

export default isValidString;
