import { IconProps, ReactStandardProps } from '@nextunicorn/types';

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

interface BadgeOptions {
  text: string;
  kind?: BadgeKind;
  size: BadgeSize;
  color: BadgeColor;
}

export interface BadgeProps extends IconProps, ReactStandardProps, BadgeOptions {}
