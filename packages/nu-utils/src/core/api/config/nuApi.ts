import axios, { AxiosError, AxiosResponse } from 'axios';
import { stringify } from 'query-string';
import interceptor from './interceptor';
import { getEnsureFingerprint, getSessionId } from '../../auth';
import { analytics } from '../../analytics';
import { ApiProps, AxiosCallProps, BasicApiProps } from '../../../@types';
import { getDocCookieOfKey } from '../../cookie';

export const nuApi = async <Data = unknown>({
  method,
  path,
  axiosConfig = {},
}: AxiosCallProps): Promise<Data | undefined> => {
  if (path.startsWith('/')) path = path.substring(1);

  if (method === 'get' && axiosConfig.data) {
    path += `?${stringify(axiosConfig.data, { arrayFormat: 'comma' })}`;
    delete axiosConfig.data;
  }

  if (!axiosConfig.headers) {
    axiosConfig.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      withCredentials: true,
    };
  }

  const sid = getSessionId();
  if (sid) axiosConfig.headers['X-NU-sid'] = sid;

  const fingerprint = getEnsureFingerprint();
  if (fingerprint) axiosConfig.headers['x-nu-fp'] = fingerprint;

  const webEnabled = getDocCookieOfKey('x-nu-wp');
  if (webEnabled) axiosConfig.headers['x-nu-wp'] = '1';

  const url = path.startsWith('http') ? path : `localhost:3000/${path}`;
  const config = { method, url, ...axiosConfig };

  analytics.customGTM('event', 'x-api', {
    type: 'request',
    method,
    path,
  });

  const start = Date.now();
  let response: AxiosResponse | undefined;
  try {
    response = await axios(config);
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response) {
        analytics.customGTM('event', 'x-api', {
          type: 'response',
          method,
          path,
          status: e.response.status,
          time: Date.now() - start,
        });
        interceptor(e.response);
      }
    }
  }
  analytics.customGTM('event', 'x-api', {
    type: 'response',
    method,
    path,
    status: response?.status,
    time: Date.now() - start,
  });
  return response?.data;
};

export const nuGet = <Ret = unknown>({
  path,
  axiosConfig,
}: BasicApiProps): Promise<Ret | undefined> =>
  nuApi({
    method: 'get',
    path,
    axiosConfig,
  });

export const nuPut = <Ret = unknown>({
  path,
  axiosConfig,
  data,
}: ApiProps): Promise<Ret | undefined> =>
  nuApi({
    method: 'put',
    path,
    axiosConfig: { data, ...axiosConfig },
  });

export const nuPost = <Ret = unknown>({
  path,
  axiosConfig,
  data,
}: ApiProps): Promise<Ret | undefined> =>
  nuApi({
    method: 'post',
    path,
    axiosConfig: { data, ...axiosConfig },
  });

export default nuApi;
