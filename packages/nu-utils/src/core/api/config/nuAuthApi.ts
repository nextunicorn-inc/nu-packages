import { AxiosError, AxiosRequestConfig } from 'axios';
import nuApi from './nuApi';
import { refreshAuth, removeAuth } from '../../auth';
import { Auth, AuthApiProps, AxiosAuthCallProps, BasicAuthApiProps } from '../../../@types/auth';
import { getCurrentTimeMS } from '../../../utils';

const refreshAndAuthCall = async <Data>({
  method,
  path,
  queryClient,
  axiosConfig,
}: AxiosAuthCallProps): Promise<Data | undefined> => {
  await refreshAuth(queryClient);
  return nuAuthApi({ method, path, queryClient, axiosConfig });
};

async function nuAuthApi<Data = unknown>({
  method,
  path,
  queryClient,
  axiosConfig,
}: AxiosAuthCallProps): Promise<Data | undefined> {
  const config: AxiosRequestConfig = { ...axiosConfig };
  const auth = queryClient.getQueryData<Auth>(['/auth/sessions']);
  const authCallParameter = { method, path, queryClient, axiosConfig };
  if (auth) {
    const { accessToken, expiredAt = 0 } = auth;

    if (expiredAt < getCurrentTimeMS()) await refreshAndAuthCall<Data>(authCallParameter);

    if (!config.headers) config.headers = {};

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  }
  try {
    return nuApi<Data>({ method, path, axiosConfig: config });
  } catch (error) {
    if (!(error instanceof AxiosError)) throw new Error();

    if (error.response && error.response.status === 401) {
      const { accessToken } = auth || {};
      if (accessToken) await refreshAndAuthCall<Data>(authCallParameter);

      removeAuth(queryClient);
    }
  }
}

export const nuAuthGet = <Data = unknown>({
  path,
  queryClient,
  axiosConfig = {},
}: BasicAuthApiProps) => nuAuthApi<Data>({ method: 'get', path, queryClient, axiosConfig });

export const nuAuthPut = <Data = unknown>({
  path,
  queryClient,
  data,
  axiosConfig = {},
}: AuthApiProps) =>
  nuAuthApi<Data>({
    method: 'put',
    path,
    queryClient,
    axiosConfig: { data, ...axiosConfig },
  });

export const nuAuthPost = <Data = unknown>({
  path,
  queryClient,
  data,
  axiosConfig = {},
}: AuthApiProps) =>
  nuAuthApi<Data>({
    method: 'post',
    path,
    queryClient,
    axiosConfig: { data, ...axiosConfig },
  });

export const nuAuthPatch = <Data = unknown>({
  path,
  queryClient,
  data,
  axiosConfig = {},
}: AuthApiProps) =>
  nuAuthApi<Data>({
    method: 'patch',
    path,
    queryClient,
    axiosConfig: { data, ...axiosConfig },
  });

export const nuAuthDelete = <Data = unknown>({
  path,
  queryClient,
  axiosConfig = {},
}: BasicAuthApiProps) =>
  nuAuthApi<Data>({
    method: 'delete',
    path,
    queryClient,
    axiosConfig,
  });
