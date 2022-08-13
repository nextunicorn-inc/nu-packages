import { useEffect, useState } from 'react';
import { PageLoader } from '../@types/util';

export default function usePageLoader({ router, exceptList }: PageLoader) {
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const { asPath: currentPath } = router;

  useEffect(() => {
    const start = () => setPageLoading(true);
    const end = () => setPageLoading(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, []);

  if (exceptList === undefined) return pageLoading;
  if (exceptList.length <= 0) return false;
  const isPassRoute = exceptList.some((target) => currentPath.startsWith(target));
  return isPassRoute ? false : pageLoading;
}
