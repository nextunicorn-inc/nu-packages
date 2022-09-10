import { BrakePointTypes } from '../@constants';

export const mediaQuery = (breakPoint: BrakePointTypes) => `@media (max-width: ${breakPoint}px)`;
