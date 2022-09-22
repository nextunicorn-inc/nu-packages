/*
 * copied from https://github.com/imbhargav5/rooks/blob/master/packages/shared/useKeyRef.ts
 */
import { Ref, useCallback, useEffect, useMemo, useRef } from 'react';

interface Options {
  /**
   * Condition which if true, will enable the event listeners
   */
  when?: boolean;
  /**
   * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
   */
  eventTypes?: Array<string | number>;
  /**
   * target ref on which the events should be listened. If no target is specified,
   * events are listened to on the window
   */
  target?: Ref<HTMLElement> | null;
}

const defaultOptions = {
  when: true,
  eventTypes: ['keydown'],
};

/**
 * keyDown, keyPress 및 keyUp과 같은 키보드 이벤트에 대한 콜백을 실행합니다.
 *
 * @param input
 * @param callback
 * @param opts
 */
const useKey = (
  input: string | number | (string | number)[],
  callback: (e: KeyboardEvent) => any,
  opts?: Options,
): void => {
  const keyList: Array<string | number> = useMemo(
    () => (Array.isArray(input) ? input : [input]),
    [input],
  );
  const options = Object.assign({}, defaultOptions, opts);
  const { when, eventTypes } = options;
  const callbackRef = useRef<(e: KeyboardEvent) => any>(callback);
  const { target } = options;

  useEffect(() => {
    callbackRef.current = callback;
  });

  const handle = useCallback(
    (e: KeyboardEvent) => {
      if (keyList.some((k) => e.key === k || e.code === k)) {
        callbackRef.current(e);
      }
    },
    [keyList],
  );

  useEffect((): any => {
    if (when && typeof window !== 'undefined') {
      const targetNode = target ? target['current'] : window;
      eventTypes.forEach((eventType) => {
        targetNode && targetNode.addEventListener(eventType, handle);
      });
      return () => {
        eventTypes.forEach((eventType) => {
          targetNode && targetNode.removeEventListener(eventType, handle);
        });
      };
    }
  }, [when, eventTypes, keyList, target, callback]);
};

export default useKey;
