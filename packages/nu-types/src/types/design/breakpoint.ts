import { BREAK_POINT, BREAK_POINT_KEY } from '../../constants';

export type BreakPointKey = typeof BREAK_POINT_KEY[keyof typeof BREAK_POINT_KEY];
export type BreakPoint = typeof BREAK_POINT[keyof typeof BREAK_POINT];
