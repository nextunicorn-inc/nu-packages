import { createContext, ReactNode, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';
import analytics from './analytics';
import unicornEvent from './unicornEvent';
import unicornEventQueue from './unicornEventQueue';
import { getUserType } from '../auth';
import { ViewLogAttribute } from '../../@types/eventLog';

function getVisibility() {
  if (typeof document === 'undefined') return true;
  return document.visibilityState;
}

//  documentVisibility = "hidden" | "visible" | "prerender"
function useDocumentVisibility() {
  const [documentVisibility, setDocumentVisibility] = useState(getVisibility());

  function handleVisibilityChange() {
    setDocumentVisibility(getVisibility());
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        window.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
    return undefined;
  }, []);

  return documentVisibility;
}

const GLOBAL_VAL: Record<string, any> = {};
const currentPathEvents: ViewLogAttribute[] = [];
const eventOccurred = (event: ViewLogAttribute) => {
  currentPathEvents.push({
    ...event,
    collectedAt: Date.now(),
  });
  unicornEvent(event);
};
const debouncedMouseTrack = debounce(() => {
  GLOBAL_VAL.lastX = GLOBAL_VAL.currentX;
  GLOBAL_VAL.lastY = GLOBAL_VAL.currentY;
}, 200);

const debouncedScrollTrack = debounce(() => {
  if (GLOBAL_VAL.lastYOffset) {
    analytics.customGTM('event', 'x-scroll', {
      height: document.body.scrollHeight,
      rate: Math.round((GLOBAL_VAL.currentYOffset / document.body.scrollHeight) * 100),
      changeRate: Math.round(
        ((GLOBAL_VAL.currentYOffset - GLOBAL_VAL.lastYOffset) / document.body.scrollHeight) * 100,
      ),
      dir: GLOBAL_VAL.currentYOffset >= GLOBAL_VAL.lastYOffset ? 'down' : 'up',
      current: GLOBAL_VAL.currentYOffset,
      last: GLOBAL_VAL.lastYOffset,
    });
  }
  GLOBAL_VAL.lastYOffset = GLOBAL_VAL.currentYOffset;
}, 400);

const MAGIC_LURKING_TIME = 3000; //  눈팅 상수
let invisibleTime = 0;
let lastChecked = Date.now();
let lastPath: string | undefined;
const flushCurrentPathEvents = (path: string | undefined) => {
  if (path && currentPathEvents.length > 0) {
    let moderatedUpTime = 0;
    let upTime = 0;
    let downTime = 0;
    const startTime = currentPathEvents[0].collectedAt;
    const endTime = currentPathEvents[currentPathEvents.length - 1].collectedAt;
    let baseTime = currentPathEvents[0].collectedAt;
    let lastMoveTime = baseTime;
    let scrollCount = 0;
    let moveCount = 0;
    let clickCount = 0;
    const effectiveClicks: unknown[] = [];

    currentPathEvents
      .slice(1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .sort((a, b) => a.collectedAt - b.collectedAt)
      .forEach((eachEvent) => {
        switch (eachEvent.event) {
          case 'm': //  move
          case 's': //  scroll
          case 'mc': //  move click
          case 'visible': {
            //  visible
            //  if lastMoveTime is too far use lastMoveTime

            const diffTime =
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              eachEvent.collectedAt - lastMoveTime > MAGIC_LURKING_TIME
                ? MAGIC_LURKING_TIME
                : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  eachEvent.collectedAt - baseTime;
            moderatedUpTime += diffTime;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            upTime += eachEvent.collectedAt - baseTime;
            baseTime = eachEvent.collectedAt;
            if (eachEvent.event !== 'visible') {
              lastMoveTime = eachEvent.collectedAt;
              if (eachEvent.event === 'mc') {
                if (eachEvent.strValues) {
                  effectiveClicks.push(eachEvent);
                }
                clickCount += 1;
              } else if (eachEvent.event === 's') {
                scrollCount += 1;
              } else if (eachEvent.event === 'm') {
                moveCount += 1;
              }
            }
            break;
          }
          case 'hidden': //  hidden
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            downTime += eachEvent.value;
            break;
          default:
            break;
        }
      });
    unicornEvent({
      pathname: path,
      category: 'b',
      event: 'p',
      values: [
        upTime,
        moderatedUpTime,
        downTime,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        startTime,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        endTime,
        scrollCount,
        moveCount,
        clickCount,
      ],
      strValues: effectiveClicks.map(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        (clickEvent) => `${clickEvent.strValues[0]}:${clickEvent.strValues[1]}`,
      ),
    });
  }
  //  flush array
  currentPathEvents.splice(0, currentPathEvents.length);
};

export const VisibilityChangesContext = createContext<boolean>(false);

const GlobalAnalyticsContainer = ({
  children,
  queryClient,
}: {
  children: ReactNode;
  queryClient: QueryClient;
}) => {
  const documentVisibility = useDocumentVisibility();
  const { pathname } = useRouter();
  // collectReferencesAndUtmSources();
  const me = queryClient.getQueryData(['users', 'me']);

  // const userRoles = me?.roles;
  // const userType = me?.userType;

  unicornEventQueue.collectUrl = '/__e';

  // console.log('me', me);
  const [windowChanges, setWindowChanges] = useState(false);
  useEffect(() => {
    if (me) {
      // @ts-ignore
      const { user, userRoles } = me ?? {};
      analytics.setIdentity(user.id, {
        roles: userRoles[0].roles,
        type: getUserType(userRoles[0].roles),
        user: true,
      });
    } else {
      analytics.setIdentity(undefined, {
        user: false,
      });
    }
  }, [me]);

  useEffect(() => {
    analytics.customGTM('event', 'pageView', {
      url: `${pathname}`,
    });
  }, [pathname]);

  const [lastChanged, setLastChanged] = useState<number>(0);
  const [lastVisibility, setLastVisibility] = useState<string | boolean>();

  useEffect(() => {
    if (lastPath) {
      const now = Date.now();
      const duration = now - lastChanged;
      eventOccurred({
        category: 'b',
        event: lastVisibility,
        value: duration,
      });
      setLastChanged(now);
      eventOccurred({
        pathname: lastPath,
        category: 'b',
        event: 'vt',
        value: now - lastChecked - invisibleTime,
      });
    }
    flushCurrentPathEvents(lastPath);
    eventOccurred({
      pathname,
      category: 'b',
      event: 'v',
    });
    lastPath = pathname;
    lastChecked = Date.now();
    invisibleTime = 0;
  }, [pathname]);

  useEffect(() => {
    const now = Date.now();
    if (lastChanged) {
      const duration = now - lastChanged;
      if (lastVisibility !== 'visible') {
        invisibleTime += duration;
      }
      eventOccurred({
        category: 'b',
        event: lastVisibility,
        value: duration,
      });
    }
    setLastChanged(now);
    setLastVisibility(documentVisibility);
  }, [documentVisibility]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => {
        const duration = Date.now() - lastChanged;
        eventOccurred({
          category: 'b',
          event: lastVisibility,
          value: duration,
        });
        //  close
        eventOccurred({
          category: 'b',
          event: 'c',
        });
        flushCurrentPathEvents(pathname);
      };
      window.addEventListener('beforeunload', listener);
      return () => {
        window.removeEventListener('beforeunload', listener);
      };
    }
    return undefined;
  }, [lastVisibility]);

  useEffect(() => {
    analytics.sessionStart();
    const listener = (event: MouseEvent) => {
      if (event.clientX && event.clientY) {
        const { clientX, clientY } = event;
        GLOBAL_VAL.currentX = clientX;
        GLOBAL_VAL.currentY = clientY;
        debouncedMouseTrack();
      }
    };

    const onScroll = () => {
      GLOBAL_VAL.currentYOffset = window.pageYOffset;
      debouncedScrollTrack();
    };
    document.addEventListener('mousemove', listener);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      document.removeEventListener('mousemove', listener);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setWindowChanges(!windowChanges);
    };
    const onResize = () => {
      setWindowChanges(!windowChanges);
    };
    document.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [windowChanges]);

  return (
    <VisibilityChangesContext.Provider value={windowChanges}>
      {children}
    </VisibilityChangesContext.Provider>
  );
};

export default GlobalAnalyticsContainer;
