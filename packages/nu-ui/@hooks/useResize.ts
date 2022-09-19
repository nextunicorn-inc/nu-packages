import { useEffect, useState } from 'react';
import { BREAK_POINT } from '../@constants';

/**
 * 반응형 디자인이 들어간 컴포넌트 개발 시 상태를 보유한 경우 이를 제어할 수 있게 만드는 hook입니다.
 *
 * @param query mediaQuery 정보를 담은 `(min-width: 사이즈px)` 또는 `(max-width: 사이즈px)` 형식의 문자열입니다.
 * @param callback window.matchMedia가 true일 때 발생시키고 싶은 이벤트 핸들러입니다. 인자로 query로 주어진 미디어쿼리 일치 여부를 받습니다.
 */
const useResize = (
  query = `(min-width: ${BREAK_POINT.medium}px)`,
  callback: (isMatch: boolean) => void,
) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches) {
      setMatches(media.matches);
      callback(matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query, callback]);
};

export default useResize;
