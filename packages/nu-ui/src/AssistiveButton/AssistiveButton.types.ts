import React from 'react';
import { DisableProps, IconProps, LoadingProps } from '@nextunicorn-inc/nu-types';

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
    AssistiveButtonOptions {}
