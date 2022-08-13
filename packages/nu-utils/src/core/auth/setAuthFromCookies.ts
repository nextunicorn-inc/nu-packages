import { QueryClient } from 'react-query';
import { decodeJwt } from 'jose';
import { AuthCookie } from '../../@types/auth';

const setAuthFromCookies = (queryClient: QueryClient, authFromCookies: AuthCookie): void => {
  const isUnicornORMStyle = Object.prototype.hasOwnProperty.call(authFromCookies, '__@data@__');
  const nuAuth = isUnicornORMStyle ? authFromCookies['__@data@__'] : authFromCookies;
  const { accessToken, refreshToken } = nuAuth;
  const { exp: expiredAt } = decodeJwt(accessToken);

  queryClient.setQueryData(['/auth/sessions'], {
    accessToken,
    refreshToken,
    expiredAt,
  });
};

export default setAuthFromCookies;
