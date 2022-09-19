import React from 'react';
import { DisableProps, IconProps, LoadingProps, ReactStandardProps } from '@nextunicorn/types';

export type TextButtonSize = 'large' | 'small';

type TextButtonOptions = {
  text?: string;
  size?: TextButtonSize;
};

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    TextButtonOptions {}
