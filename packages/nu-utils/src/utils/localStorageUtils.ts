import dayjs from 'dayjs';
import UGEventTarget from '@ungap/event-target';
import isBrowser from './isBrowser';

declare global {
  interface EventTarget {
    fireEvent: (event: Event) => boolean;
  }
}
const localStorageEventHolder: EventTarget = new UGEventTarget();
if (!localStorageEventHolder.dispatchEvent)
  localStorageEventHolder.dispatchEvent = localStorageEventHolder.fireEvent;

export const removeLocalStorageData = (key: string) => {
  if (!isBrowser()) return;

  localStorage.removeItem(key);
  localStorage.removeItem(`${key}-expired`);
  localStorageEventHolder.dispatchEvent(new CustomEvent('local-storage-changed', { detail: key }));
};

export const getLocalStorageData = (key: string, type: 'string' | 'json' = 'string') => {
  if (!isBrowser()) return;

  const expiredAt = localStorage.getItem?.(`${key}-expired`);
  if (expiredAt) {
    const now = dayjs();
    const isExpired = dayjs(expiredAt).isBefore(now) || dayjs(expiredAt).isSame(now);
    if (isExpired) return removeLocalStorageData(key);
  }

  if (type === 'json') {
    const val = localStorage.getItem?.(key);
    if (val) return JSON.parse(val);

    return val;
  }

  return localStorage.getItem?.(key);
};

export const setLocalStorageData = (
  key: string,
  value?: string,
  options?: {
    expiredAt?: string;
    days?: number;
  },
) => {
  if (!isBrowser()) return;
  if (value) localStorage.setItem?.(key, value);

  if (options?.expiredAt) {
    localStorage.setItem?.(`${key}-expired`, options.expiredAt);
  } else if (options?.days) {
    localStorage.setItem?.(
      `${key}-expired`,
      `${Math.floor(Date.now() / 1000) + options.days * 86400}`,
    );
  }

  localStorageEventHolder.dispatchEvent(new CustomEvent('local-storage-changed', { detail: key }));
};
