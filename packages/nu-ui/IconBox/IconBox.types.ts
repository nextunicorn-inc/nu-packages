import type { IconProps, SizeTypes, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

interface IconBoxOptions {
  text?: string;
  size?: SizeTypes;
  gap?: number;
}

export interface IconBoxProps
  extends IconProps,
    ReactStandardProps,
    EmotionCSSProps,
    IconBoxOptions {}
