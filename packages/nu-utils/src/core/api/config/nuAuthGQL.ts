import { nuGQL } from './nuGQL';
import { refreshAuth } from '../../auth';
import { Auth, BasicAuthGraphqlProps } from '../../../@types';
import { getCurrentTimeMS } from '../../../utils';
import refreshAndAuthCall from './refershAndAuthCall';
import { interceptor } from './index';

async function nuAuthGQL<Data = unknown>({
  query,
  data,
  graphqlConfig,
  queryClient,
}: BasicAuthGraphqlProps): Promise<Data | undefined> {
  const config: Record<string, string> = { ...graphqlConfig };
  const authCallParameter = { query, data, config, queryClient };

  const auth = queryClient.getQueryData<Auth>(['/auth/sessions']);
  if (auth === undefined) await refreshAuth(queryClient);

  const { accessToken, expiredAt = 0 } = auth as Auth;
  if (expiredAt < getCurrentTimeMS()) return refreshAndAuthCall<Data>(authCallParameter);
  if (accessToken) config['authorization'] = `Bearer ${accessToken}`;

  try {
    return nuGQL({ query, data, graphqlConfig: config, queryClient });
  } catch (error) {
    // @ts-ignore
    // Todo 현재 너무 많은 에러들이 발생해서 일단 주석처리
    interceptor(error.response);
  }
}

export default nuAuthGQL;
