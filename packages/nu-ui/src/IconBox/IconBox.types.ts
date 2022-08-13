import { IconProps, SizeTypes } from '@nextunicorn-inc/nu-types';

interface IconBoxOptions {
  text?: string;
  size?: SizeTypes;
  gap?: number;
}

export interface IconBoxProps extends IconProps, IconBoxOptions {}
