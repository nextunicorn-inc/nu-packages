import { fromNumber, generateRandomString } from '../../utils';

const getTransactionId = () =>
  generateRandomString(5) + generateRandomString(5) + fromNumber(Date.now());

export default getTransactionId;
