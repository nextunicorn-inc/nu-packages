import { QueryClient } from 'react-query';
import { decodeJwt } from 'jose';
import { nuPost } from '../api/config';
import { useRouter } from 'next/router';

type Auth = {
  accessToken: string;
  refreshToken: string;
};

/**
 * auth update
 *
 * @param queryClient
 */
async function refreshAuth(queryClient: QueryClient) {
  const auth = queryClient.getQueryData(['/auth/sessions']) as Auth;
  const isBrowser = typeof window !== 'undefined';
  if (auth && auth.refreshToken) {
    const response = await fetch(`${process.env.REDIRECT_URL}/refresh`, {
      method: 'POST',
      body: JSON.stringify({ isBrowser, auth }),
    });
    if (!response.ok) {
      return null;
    }
    const responseAuth = (await response.json()) as unknown as Auth;

    const { accessToken, refreshToken } = responseAuth;
    const { exp: expiredAt } = decodeJwt(accessToken);
    queryClient.setQueryData(['/auth/sessions'], {
      accessToken,
      refreshToken,
      expiredAt,
    });

    return responseAuth;
  }

  // TODO: 에러 나면 수정하기(+ 리팩토링때 제거하기)
  return queryClient.prefetchQuery(['/auth/sessions'], async () => {
    const responseAuth = await nuPost<Auth>({
      path: `${process.env.REDIRECT_URL}/session`,
      data: { grantType: 'cookie' },
    });

    if (responseAuth === undefined) return null;

    const { accessToken, refreshToken } = responseAuth;
    const { exp: expiredAt } = decodeJwt(accessToken);
    return {
      accessToken,
      refreshToken,
      expiredAt,
    };
  });
}

export default refreshAuth;
