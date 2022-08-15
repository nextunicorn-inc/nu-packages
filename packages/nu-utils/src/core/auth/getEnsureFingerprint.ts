import once from 'lodash/once';
import { fromNumber, generateRandomString } from '../../utils';
import { getDocCookieOfKey, setCookie } from '../cookie';

const getEnsureFingerprint = once(() => {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') return;

  let nuFp = getDocCookieOfKey('nu-fp');
  if (nuFp) return nuFp;

  let nuFpInLocalStorage = localStorage.getItem('nu-fp');
  if (!nuFpInLocalStorage) {
    nuFpInLocalStorage =
      generateRandomString(5) +
      fromNumber(navigator.userAgent.length) +
      generateRandomString(5) +
      fromNumber(Date.now());
    localStorage.setItem('nu-fp', nuFpInLocalStorage);
  }
  nuFp = nuFpInLocalStorage;
  setCookie('nu-fp', nuFp, 99999);

  return nuFp;
});

export default getEnsureFingerprint;
