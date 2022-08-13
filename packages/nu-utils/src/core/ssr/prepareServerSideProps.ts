import { decodeJwt } from 'jose';
import { serialize } from 'cookie';
import { dehydrate, QueryClient } from 'react-query';
import { cloneDeep, noop } from 'lodash';
import { gql } from 'graphql-request';
import { PrepareServerSidePropsFunc, AuthCookie, UserInfo, UserInfoGQL } from '../../@types';
import canAccessPage from './canAccessPage';
import { setAuthFromCookies, parseCookie, refreshAuth, encodeJson } from '../auth';
import { isInstanceOfAPIError } from '../error';
import { MAX_AGE_LIMIT } from '../../constants';
import { hasTargetRole, getCurrentTimeMS, isEmptyObject } from '../../utils';
import * as Sentry from '@sentry/nextjs';
import { nuAuthGQL } from '../api';

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

    const authFromCookies = parseCookie(ctx.req.headers.cookie, 'nu-auth') as unknown as AuthCookie;
    if (isEmptyObject(authFromCookies)) {
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
          serialize('nu-auth', encodeJson(response), {
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
