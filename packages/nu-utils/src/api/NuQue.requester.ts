import isomorphicFetch from 'isomorphic-fetch';
import { Options, RequestHeaders, Response } from './NuQue.types';
import deepMerge from '../common/deepMerge';

export interface NuQueError {
  name: string;
  message: string;
  stack?: string;
  status?: number;
  code?: number;
}

export const requester = async <T>(
  urlOrConfig: string | Options,
  config?: Options,
  _method?: string,
  data?: BodyInit,
  defaults: Options = {},
  // eslint-disable-next-line max-params
): Promise<Response<T>> => {
  const response = {} as Response<T>;
  const customHeaders: RequestHeaders = {};

  let url = (typeof urlOrConfig !== 'string' ? (config = urlOrConfig).url : urlOrConfig) as string;
  const options: Options = deepMerge(defaults, config);
  let dataSet = data || options.data;

  (options.transformRequest || []).map((f) => {
    dataSet = (f(dataSet, options.headers) || dataSet) as BodyInit;
  });

  if (options.auth) customHeaders.authorization = options.auth;

  if (dataSet && typeof dataSet === 'object') {
    dataSet = JSON.stringify(dataSet);
    customHeaders['content-type'] = 'application/json';
  }

  try {
    // @ts-ignore
    customHeaders[options.xsrfHeaderName] = decodeURIComponent(
      // @ts-ignore
      document.cookie.match(RegExp('(^|; )' + options.xsrfCookieName + '=([^;]*)'))[2],
    );
  } catch (e) {}

  if (options.baseURL) {
    url = url.replace(/^(?!.*\/\/)\/?/, options.baseURL + '/');
  }

  if (options.params) {
    url +=
      (~url.indexOf('?') ? '&' : '?') +
      (options.paramsSerializer
        ? options.paramsSerializer(options.params)
        : new URLSearchParams(options.params));
  }

  const fetcher = typeof window === 'undefined' ? isomorphicFetch : options.fetch || window.fetch;
  const method = (_method || options.method || 'get').toUpperCase();

  if (options.trackerCallback) {
    options.trackerCallback('event', 'x-api', {
      type: 'request',
      method,
      path: url,
    });
  }

  const start = Date.now();
  try {
    const fetchResponse = await fetcher(url, {
      method,
      body: dataSet,
      headers: deepMerge(options.headers, customHeaders, true),
      credentials: options.withCredentials ? 'include' : undefined,
      signal: options.signal || null,
    });

    for (const i in fetchResponse) {
      // @ts-ignore
      if (typeof fetchResponse[i] !== 'function') response[i] = fetchResponse[i];
    }

    if (options.responseType == 'stream') {
      response.data = fetchResponse.body;
      return response;
    }

    const parsedData = await fetchResponse[options.responseType || 'text']();
    response.data = parsedData;
    // 이 작업이 실패해도 괜찮아요! response.data 에는 분석되지 않은 값이 할당됩니다.
    response.data = JSON.parse(parsedData);

    if (options.trackerCallback) {
      options.trackerCallback('event', 'x-api', {
        type: 'response',
        method,
        path: url,
        status: response.status,
        time: Date.now() - start,
      });
    }

    const ok = options.validateStatus
      ? options.validateStatus(fetchResponse.status)
      : fetchResponse.ok;
    return ok ? response : Promise.reject(response);
  } catch (err) {
    if (options.trackerCallback) {
      options.trackerCallback('event', 'x-api', {
        type: 'response',
        method,
        path: url,
        status: (err as NuQueError).status,
        time: Date.now() - start,
      });
    }

    if ((err as Error).name == 'AbortError')
      return Promise.reject('요청을 대기하는 시간이 너무 길어 aborted 되었습니다.');

    if (options.errorInterceptor) options.errorInterceptor(err);

    throw err;
  }
};
