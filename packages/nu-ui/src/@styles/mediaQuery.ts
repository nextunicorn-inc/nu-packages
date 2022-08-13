import { BreakPoint } from '@nextunicorn-inc/nu-types';

export const mediaQuery = (breakPoint: BreakPoint) => `@media (max-width: ${breakPoint}px)`;
