import { QueryClient } from 'react-query';
import { setCookie } from '../cookie';

const removeAuth = (queryClient: QueryClient): void => {
  queryClient.removeQueries(['/auth/sessions'], { exact: true });

  if (typeof window !== 'undefined') setCookie('nu-pvt', null);
};

export default removeAuth;
