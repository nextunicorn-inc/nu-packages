import { matchPath } from 'react-router';
import { ROUTER } from '../constants';

const findMatchedRouter = (path: string) =>
  Object.values(ROUTER)
    .map((route: string) => matchPath({ path: route, caseSensitive: false, end: true }, path))
    .find((v) => v);

export default findMatchedRouter;
