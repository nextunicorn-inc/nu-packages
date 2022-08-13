import { CHARACTERS } from '../constants';

const generateRandomString = (length: number, characters: string = CHARACTERS.ALL): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default generateRandomString;
