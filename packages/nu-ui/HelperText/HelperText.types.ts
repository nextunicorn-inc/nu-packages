import { ChildrenProps, ReactStandardProps } from '@nextunicorn/types';
//
import EmotionCSSProps from '../@utils/types';

export type Color = 'light' | 'dark' | 'gray' | 'error';

interface HelperOptions {
  color?: Color;
}

export interface HelperProps
  extends ChildrenProps,
    ReactStandardProps,
    EmotionCSSProps,
    HelperOptions {}
