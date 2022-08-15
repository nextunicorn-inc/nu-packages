import _ from 'lodash';
import { getLocalStorageData, parseQueryString, setLocalStorageData } from '../../utils';
import { setCookie } from '../cookie'; // will be executed at most once.

const WEB_URL = 'www-alpha.nextunicorn.kr';

const getCurrentDate = () => Math.floor(Date.now() / 1000 / 60 / 60 / 24);

export const getUtmSources = () => {
  try {
    return JSON.parse(getLocalStorageData('utmSources_v2'))?.filter(
      (v: number[]) => v && getCurrentDate() - v[1] < 7,
    );
  } catch (e) {
    return [];
  }
};

export const getRefs = () => {
  try {
    return JSON.parse(getLocalStorageData('refs'))?.filter((v: unknown) => v);
  } catch (e) {
    return [];
  }
};

export const collectReferencesAndUtmSources = () => {
  const queries = parseQueryString(window.location.search);
  if (queries.ref_uid) {
    setCookie('refUid', queries.ref_uid, 1);
  }
  if (queries.utm_source) {
    try {
      const a = [...getUtmSources()];
      a.push([queries.utm_source, getCurrentDate()]);
      setLocalStorageData('utmSources_v2', JSON.stringify(_.uniqBy(a, (b) => b[0])), {
        days: 7,
      });
    } catch (e) {
      setLocalStorageData(
        'utmSources_v2',
        JSON.stringify([[queries.utm_source, getCurrentDate()]]),
        {
          days: 7,
        },
      );
    }
  }

  const ref = (() => {
    if (typeof document === 'undefined' || !document.referrer) return undefined;
    if (document.referrer.indexOf(WEB_URL) < 0) return document.referrer;
    return undefined;
  })();
  if (ref) {
    try {
      const a = [...getRefs()];
      a.push(ref);
      setLocalStorageData('refs', JSON.stringify(_.uniq(a)), {
        days: 7,
      });
    } catch (e) {
      setLocalStorageData('refs', JSON.stringify([ref]), {
        days: 7,
      });
    }
  }
};
