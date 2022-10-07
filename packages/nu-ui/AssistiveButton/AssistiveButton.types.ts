import type { ButtonHTMLAttributes } from 'react';
import type { DisableProps, IconProps, LoadingProps, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export type AssistiveButtonColor = 'blue' | 'coral' | 'gray';

type AssistiveButtonOptions = {
  text?: string;
  buttonColor?: AssistiveButtonColor;
};

export interface AssistiveButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    AssistiveButtonOptions,
    EmotionCSSProps {}
