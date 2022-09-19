import React from 'react';
import { DisableProps, IconProps, LoadingProps, ReactStandardProps } from '@nextunicorn/types';

export type AssistiveButtonColor = 'blue' | 'coral' | 'gray';

type AssistiveButtonOptions = {
  text?: string;
  buttonColor?: AssistiveButtonColor;
};

export interface AssistiveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DisableProps,
    LoadingProps,
    IconProps,
    ReactStandardProps,
    AssistiveButtonOptions {}
