import { useEffect, useState } from 'react';
import { BREAK_POINT, BREAK_POINT_KEY, BreakPointKey } from '@nextunicorn-inc/nu-types';

const useCurrentBreakPoint = () => {
  const [currentBreakPoint, setCurrentBreakPoint] = useState<BreakPointKey>(BREAK_POINT_KEY.large);

  useEffect(() => {
    function handleResize() {
      const nextBreakPoint: BreakPointKey = (() => {
        if (window.innerWidth < BREAK_POINT.small) return BREAK_POINT_KEY.small;
        if (window.innerWidth < BREAK_POINT.medium) return BREAK_POINT_KEY.medium;
        return BREAK_POINT_KEY.large;
      })();
      setCurrentBreakPoint(nextBreakPoint);
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return currentBreakPoint;
};

export default useCurrentBreakPoint;
