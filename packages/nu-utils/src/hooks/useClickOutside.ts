import React, { useEffect } from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: (...args: unknown[]) => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current && !ref.current.contains(target)) callback();
    };

    document.getElementById('__next')!.addEventListener('click', handleClick);

    return () => {
      document.getElementById('__next')!.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
