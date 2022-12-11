import type { ButtonHTMLAttributes } from 'react';
import type {
  DisableProps,
  IconProps,
  LoadingProps,
  SizeTypes,
  ReactStandardProps,
} from '@nextunicorn/types';

export type ButtonVariant = 'primary' | 'secondary' | 'linePrimary' | 'lineSecondary';

export type ButtonSize = SizeTypes;

type ButtonOptions = {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isBlock?: boolean;
  href?: string;
};

export default interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    ButtonOptions {}
