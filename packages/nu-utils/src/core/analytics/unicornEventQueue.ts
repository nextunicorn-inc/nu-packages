import map from 'lodash/map';
import { getLocalStorageData } from '../../utils';

type UTM = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

const hasAnalytics = () => typeof window !== 'undefined' && window.gtm;

function removeUndefinedFromObject<T>(obj: T): T {
  const ret = {} as T;
  Object.entries(obj).forEach(([i, v]) => {
    if (v !== undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ret[i] = v;
    }
  });
  return ret;
}

const getCurrentRef = () =>
  typeof document !== 'undefined' && document.referrer ? document.referrer : undefined;

const getCurrentDate = () => Math.floor(Date.now() / 1000 / 60 / 60 / 24);

export const getUtmSources = () => {
  try {
    return JSON.parse(getLocalStorageData('utmSources_v2'))?.filter(
      (v: [string[], number]) => v && getCurrentDate() - v[1] < 7,
    );
  } catch (e) {
    return [];
  }
};

const getRefs = () => {
  try {
    return JSON.parse(getLocalStorageData('refs'))?.filter((v: string) => v);
  } catch (e) {
    return [];
  }
};

class UnicornEventQueue {
  public collectUrl: string | undefined;

  private utmFound = false;

  private lastSearch?: string = undefined;

  private cachedParams: UTM = {};

  private queue: unknown[] = [];

  public async flush() {
    if (!hasAnalytics()) return;
    if (this.queue.length <= 0) return;

    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      this.queue.splice(0, this.queue.length);
      return;
    }

    if (process.env.ENV !== 'local') {
      fetch(`${process.env.REDIRECT_URL}/event`, {
        method: 'POST',
        body: JSON.stringify(this.queue),
      }).then(() => this.queue.splice(0, this.queue.length));
    }
  }

  public push({
    category,
    event,
    value,
    values,
    strValues,
    pathname,
    contentId,
    description,
    search,
  }: {
    category: string;
    event: string;
    value?: number;
    values?: number[];
    strValues?: string[];
    pathname: string;
    contentId?: string | number;
    description?: string;
    search?: UTM;
  }) {
    if (!hasAnalytics()) return;
    if (!this.utmFound && typeof search === 'object') {
      // search가 이미 파싱됐을 때
      this.cachedParams.utm_source = search.utm_source;
      this.cachedParams.utm_campaign = search.utm_campaign;
      this.cachedParams.utm_medium = search.utm_medium;
      this.cachedParams.utm_content = search.utm_content;
      this.cachedParams.utm_term = search.utm_term;
      if (this.cachedParams.utm_source) {
        this.utmFound = true;
      }
    }
    if (!this.utmFound) {
      // UTM 을 찾는 로직
      const currentSearch = search;
      if ((!this.lastSearch && currentSearch) || currentSearch !== this.lastSearch) {
        this.cachedParams = currentSearch as UTM;
        if (this.cachedParams.utm_source) {
          this.utmFound = true;
        }
      }
    }
    this.queue.push(
      removeUndefinedFromObject({
        p: pathname,
        r: getCurrentRef(),
        f: getRefs(),
        c: category,
        i: contentId,
        e: event,
        dd: description,
        v: value ? [value] : values,
        s: strValues,
        d: Date.now(),
        sc: this.cachedParams.utm_source,
        md: this.cachedParams.utm_medium,
        cp: this.cachedParams.utm_campaign,
        ct: this.cachedParams.utm_content,
        tm: this.cachedParams.utm_term,
        scs: map(getUtmSources(), (v) => v[0]),
        t: search,
      }),
    );
    if (this.queue.length > 20) {
      this.flush();
    }
  }
}

const unicornEventQueue = new UnicornEventQueue();

export default unicornEventQueue;
