import { BrakePointTypes } from '../@constants';

export const maxWidthQuery = (breakPoint: BrakePointTypes) => `(max-width: ${breakPoint}px)`;

export const minWidthQuery = (breakPoint: BrakePointTypes) => `(min-width: ${breakPoint}px)`;

export const mediaQuery = (breakPoint: BrakePointTypes) => `@media ${maxWidthQuery(breakPoint)}`;
