import { BasicAuthGraphqlProps } from '../../../@types';
import { refreshAuth } from '../../auth';
import nuAuthGQL from './nuAuthGQL';

const refreshAndAuthCall = async <Data>({
  query,
  data,
  graphqlConfig,
  queryClient,
}: BasicAuthGraphqlProps): Promise<Data | undefined> => {
  await refreshAuth(queryClient);
  return nuAuthGQL({ query, data, queryClient, graphqlConfig });
};
export default refreshAndAuthCall;
