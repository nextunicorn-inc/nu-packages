import { AmplitudeClient } from 'amplitude-js';
import { NextRouter } from 'next/router';
import throttle from 'lodash/throttle';
import pick from 'lodash/pick';
import { ParsedUrlQuery } from '@nextunicorn/types';
import { isBrowser } from '../../utils';
import unicornEvent from './unicornEvent';

declare global {
  interface Window {
    gtm: (...params: unknown[]) => unknown;
    amplitude: {
      getInstance: () => AmplitudeClient;
      Identify: unknown;
    };
    hj: (...params: unknown[]) => unknown;
    unicornEvent: (...params: unknown[]) => unknown;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = (..._: unknown[]) => null;
// noinspection TypeScriptUnresolvedVariable
const gtm = isBrowser() ? window.gtm : dummy; // google tag manager
// noinspection TypeScriptUnresolvedVariable
const getAmp = isBrowser() ? () => window.amplitude : () => null; // amplitude
const hj = isBrowser() ? window.hj : dummy; // hotjar
if (isBrowser()) {
  // noinspection TypeScriptUnresolvedVariable
  window.unicornEvent = unicornEvent;
}

let adBlockOn = false;
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
// https://amplitude.zendesk.com/hc/en-us/articles/115001361248-JavaScript-SDK-Installation#tracking-events
// https://support.google.com/analytics/answer/6317498?hl=ko&ref_topic=6317484

const PAGE_MODAL_QUERY_KEYS = ['companyId'];
const AMP_NECESSARY_QUERY_KEYS = ['tab'];
const getParamKeys = (pathname: string, query: ParsedUrlQuery) =>
  Object.keys(query).filter((key) => pathname.includes(`[${key}]`));
const getPageModalKey = (query: ParsedUrlQuery) =>
  Object.keys(query).find((key) => PAGE_MODAL_QUERY_KEYS.includes(key));

const amplitudeLogEvent = (template: string, properties?: Record<string, unknown>) => {
  if (!getAmp()) {
    console.log('is not amp');
    return;
  }
  // if logEvent success, logEvent return eventId but, if blocked, return undefined
  // https://github.com/amplitude/Amplitude-JavaScript/blob/01b3900ba8e109989b0f7d7bc0b12b827ca6fc26/src/amplitude-client.js#L1150
  adBlockOn = !getAmp()?.getInstance().logEvent(template, properties);
  if (adBlockOn) {
    unicornEvent({
      category: 'ampFailed',
      event: template,
      ampProperties: properties,
    });
  }
};

const throttleError = throttle(({ description, fatal } = {}) => {
  gtm('event', 'exception', {
    error: description,
    fatal,
  });
  unicornEvent({
    category: 'error',
    description,
  });
}, 1000);

export class AnalyticsClient {
  private depth = 0;

  public pageView({ router }: { router: NextRouter }) {
    const { pathname, query, asPath } = router;
    const paramKeys = getParamKeys(pathname, query);

    const ampNecessaryQueries = pick(query, [
      ...AMP_NECESSARY_QUERY_KEYS,
      ...PAGE_MODAL_QUERY_KEYS,
    ]);
    const ampParamQueries = pick(query, paramKeys);

    const pageModalKey = getPageModalKey(query);

    const ampPathname = pathname === '/' ? '/mainPage' : pathname;
    const pathTemplate = pageModalKey
      ? `PageView${ampPathname}?${pageModalKey}`
      : `PageView${ampPathname}`;

    if (getAmp()) {
      amplitudeLogEvent(pathTemplate, {
        ...ampNecessaryQueries,
        ...ampParamQueries,
      });
    }

    unicornEvent({
      category: 'view',
      pathname: asPath,
      search: query,
      value: this.depth,
    });
    this.depth += 1;
  }
  // 이 아래 모든 method에 async와 public 걸려있었음
  // public async error

  // eslint-disable-next-line class-methods-use-this
  public increaseViewCount(pathname: string) {
    unicornEvent({
      category: 'viewCount',
      pathname,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public error({
    description,
    fatal,
  }: {
    description?: string;
    fatal?: string;
  } = {}) {
    throttleError({
      description,
      fatal,
    });
  }

  // TODO: rest로 들어오는 properties 레거시 포함이라 확인 필요, 또는 따로 분리할 것 (ex. gtm) @hun
  /*
      value?: number;
      values?: number[];
      strValues?: string[];
      contentId?: string;
      companyName?: string;
     */

  // eslint-disable-next-line class-methods-use-this
  public click({
    eventName,
    eventProperties,
    router,
  }: {
    eventName: string;
    eventProperties?: Record<string, string>;
    router: NextRouter;
  }) {
    hj('event', eventName);

    const { pathname, query, asPath } = router;
    const paramKeys = getParamKeys(pathname, query);

    const ampNecessaryQueries = pick(query, [
      ...AMP_NECESSARY_QUERY_KEYS,
      ...PAGE_MODAL_QUERY_KEYS,
    ]);
    const paramQueries = pick(query, paramKeys);

    const pageModalKey = getPageModalKey(query);
    const pathTemplate = pageModalKey ? `${pathname}?${pageModalKey}` : pathname;

    console.log('clickEvent', eventName, {
      pathname: pathTemplate,
      ...eventProperties,
      ...ampNecessaryQueries,
      ...paramQueries,
    });

    gtm('event', 'click', {
      label: eventName,
      pathname: pathTemplate,
      ...eventProperties,
      ...ampNecessaryQueries,
      ...paramQueries,
    });

    amplitudeLogEvent(`Click_${eventName}`, {
      pathname: pathTemplate,
      ...eventProperties,
      ...ampNecessaryQueries,
      ...paramQueries,
    });

    unicornEvent({
      category: 'click',
      event: eventName,
      ampProperties: eventProperties,
      pathname: asPath,
      search: query,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public event(
    dataEventName: string,
    // eslint-disable-next-line default-param-last
    amplitudePrefix = 'Event_',
    properties?: Record<string, unknown>,
  ) {
    gtm('event', 'event', {
      label: dataEventName,
      ...properties,
    });
    amplitudeLogEvent(`${amplitudePrefix || ''}${dataEventName}`, properties);
    unicornEvent({
      category: 'event',
      event: dataEventName,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public completeRegistration(formKey: string) {
    gtm('event', 'complete_registration', {
      label: formKey,
    });
    if (getAmp()) {
      amplitudeLogEvent(`CompleteRegistration_${formKey}`);
    }
    unicornEvent({
      category: 'track',
      event: 'CompleteRegistration',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public initialRegistration(formKey: string) {
    gtm('event', 'initiate_registration', {
      label: formKey,
    });
    // No standard way of facebook tracking this
    amplitudeLogEvent(`InitiateRegistration_${formKey}`);
    unicornEvent({
      category: 'track',
      event: 'InitiateRegistration',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public setIdentity(userId: string | undefined, properties: any) {
    if (getAmp()) {
      // noinspection TypeScriptUnresolvedFunction
      /*
            const identify = new amp.Identify();
            Object.entries(properties).forEach(([k, v]) => {
              if (v !== undefined) {
                identify.set(k, v);
              }
            });
             */
      // noinspection TypeScriptUnresolvedFunction
      getAmp()
        ?.getInstance()
        .setUserId(userId ?? null);
      getAmp()?.getInstance().setUserProperties(properties);
    }
    gtm('set', 'user', {
      id: userId,
      ...properties,
    });
    gtm('event', 'setIdentity');
  }

  // eslint-disable-next-line class-methods-use-this
  public Purchase({ value }: any) {
    gtm('event', 'purchase', {
      value,
    });
    amplitudeLogEvent('Purchase');
    unicornEvent({
      category: 'track',
      event: 'Purchase',
      value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public sessionStart() {
    unicornEvent({
      category: 'track',
      event: 'sessionStart',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public customGTM(...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    gtm(...args);
  }
}

const analytics = new AnalyticsClient();
export default analytics;
