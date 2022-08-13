import { CHARACTERS } from '../constants';

/**
 * 숫자를 문자로 변환합니다.
 * @param number
 */
const fromNumber = (number: number) => {
  let position = 0;
  let residual = Math.floor(number);
  let result = '';
  while (residual) {
    position = residual % 62;
    result += CHARACTERS.ALL.charAt(position);
    residual = Math.floor(residual / 62);
  }
  return result;
};

export default fromNumber;
