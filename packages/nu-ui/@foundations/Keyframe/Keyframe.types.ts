import type { Keyframes } from '@emotion/react';

export type KeyframeKey = 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown';

export type KeyframeType = Record<KeyframeKey, Keyframes>;
