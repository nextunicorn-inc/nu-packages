import type { ButtonHTMLAttributes } from 'react';
import type { DisableProps, IconProps, LoadingProps, ReactStandardProps } from '@nextunicorn/types';
//
import EmotionCSSProps from '../@utils/types';

export type TextButtonSize = 'large' | 'small';

type TextButtonOptions = {
  text?: string;
  size?: TextButtonSize;
  isBlock?: boolean;
  href?: string;
};

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    EmotionCSSProps,
    TextButtonOptions {}
