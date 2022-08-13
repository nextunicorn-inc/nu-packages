import { QueryClient } from 'react-query';
import { UserInfo, UserInfoGQL } from '../../@types';
import { hasTargetRole } from '../../utils';
import { getUserMeQuery } from '../queries';
import nuAuthGQL from './config/nuAuthGQL';

const fetchUserMeQuery = (queryClient: QueryClient) =>
  nuAuthGQL<UserInfoGQL>({
    queryClient,
    query: getUserMeQuery,
  }).then((res) => {
    if (!res) throw new Error('not exists user');

    return {
      ...res.userMe,
      hasNuProRole: hasTargetRole(res.userMe.userRoles, 'nuPro.member'),
    };
  });

export const fetchUserMe = async (queryClient: QueryClient): Promise<UserInfo> => {
  const userMe = await queryClient.fetchQuery(['users', 'me'], () => fetchUserMeQuery(queryClient));

  if (userMe === undefined) throw new Error('not exists user');

  return userMe;
};
