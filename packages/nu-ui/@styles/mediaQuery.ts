import { BreakPoint } from '@nextunicorn/types';

export const mediaQuery = (breakPoint: BreakPoint) => `@media (max-width: ${breakPoint}px)`;
