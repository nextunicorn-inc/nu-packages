import type { ReactNode } from 'react';
import type { ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

type NotiBadgeOptions = {
  count?: number;
  color?: 'blue' | 'red';
  size?: 'large' | 'small';
  children?: ReactNode;
};

export default interface NotiBadgeProps
  extends ReactStandardProps,
    EmotionCSSProps,
    NotiBadgeOptions {}
