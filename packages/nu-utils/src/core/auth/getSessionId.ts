import once from 'lodash/once';
import { fromNumber, generateRandomString } from '../../utils';

const getSessionId = once(() => {
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined') {
    let sessionId = sessionStorage.getItem('sid');
    if (!sessionId) {
      sessionId =
        generateRandomString(5) +
        fromNumber(navigator.userAgent.length) +
        generateRandomString(5) +
        fromNumber(Date.now());
      sessionStorage.setItem('sid', sessionId);
    }
    return sessionId;
  }
});

export default getSessionId;
