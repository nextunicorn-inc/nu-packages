import jwt, { JwtPayload } from 'jsonwebtoken';
import { GenericObject } from '@nextunicorn/types';
import { IMMEDIATELY_INVALIDATE_COOKIE, SECRET_KEY } from '../../constants';

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

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return false;

  const arrCookies = document.cookie.split(';');
  for (const arrCookie of arrCookies) {
    const key = arrCookie.substring(0, arrCookie.indexOf('=')).replace(/^\s+|\s+$/g, '');
    const value = arrCookie.substring(arrCookie.indexOf('=') + 1);
    if (key === name) return decodeURIComponent(value);
  }
  return false;
};

export const encodeJson = (target: string | { [p: string]: unknown }) => {
  if (typeof target === 'string') return target;
  return jwt.sign(target, SECRET_KEY);
};

export const decodeJson = (target: string) => {
  const decodeToken = jwt.verify(target, SECRET_KEY);
  if (decodeToken === null) return target;
  return jwt.verify(target, SECRET_KEY);
};

export const parseCookie = (
  cookieString?: string,
  targetKey?: string,
): GenericObject<string> | JwtPayload => {
  if (cookieString === undefined || cookieString === '') return {};

  const cookieObject = cookieString
    .split(';')
    .map((cookie) => cookie.split('='))
    .reduce((acc, cookie) => {
      acc[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(cookie[1].trim());
      return acc;
    }, {} as GenericObject<string>);

  if (targetKey === undefined) return cookieObject;
  if (cookieObject[targetKey] === undefined) return {};

  return decodeJson(cookieObject[targetKey]) as JwtPayload;
};
