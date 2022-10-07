import React from 'react';
import type {
  DisableProps,
  IconProps,
  LoadingProps,
  SizeTypes,
  ReactStandardProps,
} from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'angels-primary'
  | 'angels-secondary'
  | 'angels-tertiary';

export type ButtonSize = SizeTypes;

type ButtonOptions = {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isBlock?: boolean;
  href?: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    EmotionCSSProps,
    ButtonOptions {}
