const process = require('process');
import { GraphQLClient } from 'graphql-request';
import { analytics } from '../../analytics';
import { getEnsureFingerprint, getSessionId } from '../../auth';
import getTransactionId from '../../auth/getTransactionId';
import { BasicGraphqlProps } from '../../../@types';
import refreshAndAuthCall from './refershAndAuthCall';
import interceptor from './interceptor';
import { getDocCookieOfKey } from '../../cookie';

export const nuGQL = async <Data = unknown>({
  query,
  data,
  graphqlConfig = {},
  queryClient,
}: BasicGraphqlProps): Promise<Data | undefined> => {
  const graphQLClient = new GraphQLClient(process.env.V2_API_URL as string);

  const sid = getSessionId();
  if (sid) graphqlConfig['X-NU-sid'] = sid;

  const fingerprint = getEnsureFingerprint();
  if (fingerprint) graphqlConfig['x-nu-fp'] = fingerprint;

  graphqlConfig['x-transaction-id'] = getTransactionId();

  const webEnabled = getDocCookieOfKey('x-nu-wp');
  if (webEnabled) graphqlConfig['x-nu-wp'] = '1';

  graphQLClient.setHeaders(graphqlConfig);
  // Todo: x-api 추후에 다른 걸로 변경 가능
  analytics.customGTM('event', 'x-api', {
    type: 'request',
    method: 'graphql',
  });

  const start = Date.now();
  let response;
  try {
    response = await graphQLClient.request(query, data, graphqlConfig);
  } catch (e) {
    // @ts-ignore
    const { errorType, code } = e.response.errors[0].extensions;
    if (errorType === 'UNAUTHENTICATED' && code === 'EXPIRED_TOKEN' && queryClient) {
      return refreshAndAuthCall<Data>({ query, data, graphqlConfig, queryClient });
    }
    // @ts-ignore
    interceptor(e.response);
  }

  analytics.customGTM('event', 'x-api', {
    type: 'response',
    method: 'graphql',
    time: Date.now() - start,
  });

  return response;
};
