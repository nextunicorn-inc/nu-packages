import { BreakPointKeyTypes } from '@nextunicorn/types';

export const BREAK_POINT: { [key in BreakPointKeyTypes]: 1600 | 1200 | 1240 | 1300 | 1023 | 767 } =
  {
    large: 1600,
    large1200: 1200,
    large1240: 1240,
    large1300: 1300,
    medium: 1023,
    small: 767,
  } as const;

export type BrakePointTypes = typeof BREAK_POINT[keyof typeof BREAK_POINT];
