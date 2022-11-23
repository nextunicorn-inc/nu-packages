import type { BreakPointKeyTypes, IconProps, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export type BadgeKind = 'border';

export type BadgeSize = 'large' | 'medium' | 'small';

export type BadgeColor =
  | 'lightCoral'
  | 'coral'
  | 'lightYellow'
  | 'yellow'
  | 'lightBlue'
  | 'blue'
  | 'deepBlue'
  | 'lightGray'
  | 'gray'
  | 'deepGray'
  | 'black';

export type VariantSizes = Partial<Record<Exclude<BreakPointKeyTypes, 'large'>, BadgeSize>>;

interface BadgeOptions {
  text: string;
  kind?: BadgeKind;
  size: BadgeSize;
  variantSizes?: VariantSizes;
  color: BadgeColor;
}

export interface BadgeProps extends IconProps, ReactStandardProps, EmotionCSSProps, BadgeOptions {}
