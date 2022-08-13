import React from 'react';
import { IconProps } from '@nextunicorn-inc/nu-types';

export type TextButtonSize = 'large' | 'small';

type TextButtonOptions = {
  text?: string;
  size?: TextButtonSize;
};

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IconProps,
    TextButtonOptions {}
