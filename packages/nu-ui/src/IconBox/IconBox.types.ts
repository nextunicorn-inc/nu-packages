import { IconProps, SizeTypes } from '@nextunicorn/types';

interface IconBoxOptions {
  text?: string;
  size?: SizeTypes;
  gap?: number;
}

export interface IconBoxProps extends IconProps, IconBoxOptions {}
