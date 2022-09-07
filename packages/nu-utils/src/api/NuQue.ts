import requester from './NuQue.requester';
import { Options, Response } from './NuQue.types';

class NuQue {
  constructor(public defaults: Options = {}) {
    // 어떤 props도 없다면 withCredentials 설정
    if (Object.keys(this.defaults).length < 1) {
      this.defaults.withCredentials = true;
    }

    // 어떤 header도 없다면 Request 방식 설정
    if (!this.defaults.headers) {
      this.defaults.headers = {
        'X-Requested-With': 'XMLHttpRequest',
      };
    }
  }

  /**
   * 커스텀 config 옵션으로 NuQue 객체를 재생성합니다.
   *
   * @param {Options} customOptions
   * @return {{new(defaults:Options): NuQue}}
   */
  public create = (customOptions?: Options) => {
    return new NuQue(customOptions);
  };

  /**
   * default Config 수정하기
   *
   * @desc 만약 프로퍼티를 추가하는 게 아니라 삭제하고 싶다면 '@@DEL@@' 문자열을 키에 추가해주세요.
   * @example
   *          newProps = {
   *              '@@DEL@@headers': {},
   *              'headers': {
   *                  // ...
   *              }
   *          }
   * @param {Record<string, string | Record<string, string>>} newProps
   * @return void
   */
  public setConfig = (newProps: Record<string, string | Record<string, string>>) => {
    for (const key in newProps) {
      if (key.includes('@@DEL@@')) {
        // @ts-ignore
        delete this.defaults[key];
        continue;
      }
      // @ts-ignore
      this.defaults[key] = newProps[key];
    }
  };

  /**
   * 데이터를 가져오기 위해 특정 서버 리소스를 요청합니다.
   *
   * @template T
   * @param url
   * @param config
   * @return {Promise<Response<T>>}
   */
  public get = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'get', undefined, this.defaults);
  };

  /**
   * 특정 서버 리소스를 삭제합니다.
   *
   * @template T
   * @param url
   * @param config
   * @return {Promise<Response<T>>}
   */
  public delete = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'delete', undefined, this.defaults);
  };

  /**
   * 서버 리소스의 헤더를 요청합니다.
   *
   * @template T
   * @param url
   * @param config
   * @return {Promise<Response<T>>}
   */
  public head = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'head', undefined, this.defaults);
  };

  /**
   * 서버 리소스와의 통신 옵션을 설정합니다.
   *
   * @template T
   * @param url
   * @param config
   * @return {Promise<Response<T>>}
   */
  public options = <T>(url: string, config?: Options): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'options', undefined, this.defaults);
  };

  /**
   * 특정 서버 리소스를 수정합니다. 서버의 상태를 변경하거나 사이드 이펙트를 발생시킬 수 있습니다.
   *
   * @template T
   * @param url
   * @param body
   * @param config
   * @return {Promise<Response<T>>}
   */
  public post = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'post', body, this.defaults);
  };

  /**
   * 서버 리소스의 모든 부분을 요청한 payload로 변경합니다.
   *
   * @template T
   * @param url
   * @param body
   * @param config
   * @return {Promise<Response<T>>}
   */
  public put = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'put', body, this.defaults);
  };

  /**
   * 서버 리소스의 일부분을 수정합니다.
   *
   * @template T
   * @param url
   * @param body
   * @param config
   * @return {Promise<Response<T>>}
   */
  public patch = <T = unknown>(
    url: string,
    body?: BodyInit,
    config?: Options,
  ): Promise<Response<T>> => {
    return requester<T>(url, config || {}, 'patch', body, this.defaults);
  };

  /**
   * 반환된 결과값에 대한 배열 객체를 전개합니다.
   *
   * @template Args
   * @template R
   * @param fn
   * @return {(...args2: Args[]) => R}
   */
  public static spread = <Args, R>(fn: (...args: Args[]) => R): ((...args2: Args[]) => R) => {
    // @ts-ignore
    return fn.apply.bind(fn, fn);
  };

  /**
   * 모든 요청을 대기합니다.
   *
   * @example
   *  import nuque from '@nextunicorn-inc/neque';
   *
   *  const result = await nuque.all([Promise.resolve('hello'), Promise.resolve('world')]).then(
   *    nuque.spread((item1, item2) => {
   *      return `${item1} ${item2}`;
   *    })
   *  );
   */
  public static all = Promise.all.bind(Promise);

  /**
   * 요청에 대한 대기 시간을 제한합니다.
   *
   * @example
   * import nuque from '@nextunicorn-inc/neque';
   *
   * const result = nuque.post(url, query, {
   *                  ...config,
   *                  signal: nuque.abortSignal(2000)
   *                });
   *
   * @see https://blog.logrocket.com/complete-guide-abortcontroller-node-js/
   * @param timeoutMs
   * @todo aborted message 를 외부에서 입력할 수 있게 변경
   */
  public abortSignal = (timeoutMs = 3000) => {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs);
    return abortController.signal;
  };
}

export default new NuQue();
