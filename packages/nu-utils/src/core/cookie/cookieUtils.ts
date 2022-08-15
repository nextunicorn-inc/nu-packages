import { GenericObject } from '@nextunicorn/types';
import { IMMEDIATELY_INVALIDATE_COOKIE } from '../../constants';

export const setCookie = (
  name: string,
  value: string | null = null,
  expires: number | null = null,
) => {
  if (typeof document === 'undefined') return false;

  if (!value) {
    document.cookie = `${name}${IMMEDIATELY_INVALIDATE_COOKIE}`;
    return false;
  }

  const expiresDate = new Date();
  if (expires) expiresDate.setDate(expiresDate.getDate() + expires);

  const saved = `${encodeURIComponent(value)}`;
  const path = expires ? `; path=/;expires=${expiresDate.toUTCString()}` : '; path=/;';
  document.cookie = `${name}=${saved}${path}; SameSite=strict;`;

  return false;
};
export const getDocumentCookie = () =>
  typeof document === 'undefined' ? undefined : document.cookie;

export const getDocCookieOfKey = (key: string) => {
  return getCookie(getDocumentCookie(), key);
};

export const cookieStrToCookieObj = (cookieString?: string): GenericObject<string> => {
  if (cookieString === undefined || cookieString === '') return {};
  return cookieString
    .split(';')
    .map((cookie) => cookie.split('='))
    .reduce((acc, cookie) => {
      acc[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim());
      return acc;
    }, {} as GenericObject<string>);
};

export const getCookie = (
  cookieString: string | undefined,
  targetKey: string,
): string | undefined => {
  const cookieObject = cookieStrToCookieObj(cookieString);
  if (targetKey === undefined) return undefined;
  return cookieObject[targetKey];
};
