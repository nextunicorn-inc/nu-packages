import { ChildrenProps, StyleProps } from '@nextunicorn/types';

export type Color = 'light' | 'dark' | 'gray' | 'error';

interface HelperOptions {
  color?: Color;
}

export interface HelperProps extends ChildrenProps, StyleProps, HelperOptions {}
