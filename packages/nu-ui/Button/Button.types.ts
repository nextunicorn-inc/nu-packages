import React from 'react';
import {
  DisableProps,
  IconProps,
  LoadingProps,
  SizeTypes,
  ReactStandardProps,
} from '@nextunicorn/types';

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
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    ButtonOptions {}
