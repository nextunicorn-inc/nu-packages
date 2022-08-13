import { CHARACTERS } from '../constants';

/**
 * 문자를 숫자로 변환합니다.
 *
 * @param position
 */
const toNumber = (position: string) => {
  let result = 0;
  const chunks = position.split('');
  for (let e = 0; e < chunks.length; e++) {
    result = result * 62 + CHARACTERS.ALL.indexOf(position[e]);
  }
  return result;
};

export default toNumber;
