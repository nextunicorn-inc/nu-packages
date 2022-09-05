import { IconProps, SizeTypes, StyleProps } from '@nextunicorn/types';

interface IconBoxOptions {
  text?: string;
  size?: SizeTypes;
  gap?: number;
}

export interface IconBoxProps extends IconProps, StyleProps, IconBoxOptions {}
