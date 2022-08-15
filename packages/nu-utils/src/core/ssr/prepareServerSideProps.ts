import { decryptJson, encryptJson } from '@nextunicorn/bff-utils';
import { decodeJwt } from 'jose';
import { serialize } from 'cookie';
import { dehydrate, QueryClient } from 'react-query';
import { cloneDeep, noop } from 'lodash';
import { gql } from 'graphql-request';
import { PrepareServerSidePropsFunc, AuthCookie, UserInfo, UserInfoGQL } from '../../@types';
import canAccessPage from './canAccessPage';
import { setAuthFromCookies, refreshAuth } from '../auth';
import { isInstanceOfAPIError } from '../error';
import { MAX_AGE_LIMIT, SECURITY_KEY_BYTES_32 } from '../../constants';
import { hasTargetRole, getCurrentTimeMS } from '../../utils';
import * as Sentry from '@sentry/nextjs';
import { nuAuthGQL } from '../api';
import { getCookie } from '../cookie';

const redirectProps = (path: string) => ({
  redirect: {
    destination: `/login?redirectUrl=${path}`,
    permanent: false,
  },
});

const getUserMeQuery = gql`
  query UserMe {
    userMe {
      user {
        id
        email
        introduction
        name
        phone
        title
      }
      userRoles {
        roles
        companyId
        company {
          name
        }
      }
    }
  }
`;

const fetchUserMeQuery = (queryClient: QueryClient) =>
  nuAuthGQL<UserInfoGQL>({
    queryClient,
    query: getUserMeQuery,
  }).then((res: any) => {
    if (!res) throw new Error('not exists user');

    return {
      ...res.userMe,
      hasNuProRole: hasTargetRole(res.userMe.userRoles, 'nuPro.member'),
    };
  });

const fetchUserMe = async (queryClient: QueryClient): Promise<UserInfo> => {
  const userMe = await queryClient.fetchQuery(['users', 'me'], () => fetchUserMeQuery(queryClient));

  if (userMe === undefined) throw new Error('not exists user');

  return userMe;
};

const prepareServerSideProps: PrepareServerSidePropsFunc =
  ({ getServerSidePropsFunc = noop, accessibleRoles = [], loadMetaData }) =>
  async (ctx) => {
    const path = ctx.resolvedUrl;
    const queryClient = new QueryClient();

    const defaultExecuteFunction = async () => {
      await Promise.all([
        loadMetaData?.(queryClient),
        getServerSidePropsFunc({ ctx, queryClient }),
      ]);
      return { props: { dehydratedState: cloneDeep(dehydrate(queryClient)) } };
    };

    const authCookie = getCookie(ctx.req.headers.cookie, 'nu-auth');
    const authFromCookies = (() => {
      // 이미 jwt 형태로 발급된 쿠키가 잘못된 경우에 대한 예외처리
      try {
        return authCookie
          ? (decryptJson(SECURITY_KEY_BYTES_32, authCookie) as unknown as AuthCookie)
          : null;
      } catch (e) {
        return null;
      }
    })();
    if (!authFromCookies) {
      if (!canAccessPage(accessibleRoles)) return redirectProps(path);
      return await defaultExecuteFunction();
    }

    try {
      const { exp: expiredAt } = decodeJwt(authFromCookies.accessToken);
      setAuthFromCookies(queryClient, authFromCookies);
      if (expiredAt === null || expiredAt === undefined) return redirectProps(path);
      if (expiredAt < getCurrentTimeMS()) {
        const response = (await refreshAuth(queryClient)) as unknown as AuthCookie;
        if (response === null) {
          return {
            redirect: {
              destination: '/401',
              permanent: false,
            },
          };
        }

        ctx.res.setHeader(
          'Set-Cookie',
          serialize('nu-auth', encryptJson(SECURITY_KEY_BYTES_32, response), {
            maxAge: MAX_AGE_LIMIT,
            httpOnly: true,
            path: '/',
          }),
        );
      }

      const userMe = await fetchUserMe(queryClient);
      if (!canAccessPage(accessibleRoles, userMe)) return redirectProps(path);

      return await defaultExecuteFunction();
    } catch (error) {
      if (!isInstanceOfAPIError(error)) {
        Sentry.captureMessage('SSR 과정에서 인증이 실패했습니다.');
        throw new Error('인증이 실패했습니다.');
      }

      const { redirectUrl, isNotFound } = error;
      return isNotFound
        ? { notFound: true }
        : { redirect: { destination: redirectUrl, permanent: false } };
    }
  };

export default prepareServerSideProps;
