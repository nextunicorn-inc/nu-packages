import type { Keyframes } from '@emotion/react';

export type KeyframeKey =
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'rotate'
  | 'dash';

export type KeyframeType = Record<KeyframeKey, Keyframes>;
