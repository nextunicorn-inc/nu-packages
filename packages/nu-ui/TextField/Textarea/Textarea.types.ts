import React from 'react';
import { DisableProps } from '@nextunicorn/types';

export type TextareaBorderProps = 'inactive' | 'focus' | 'active' | 'alert';

interface TextareaOptions extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
  label?: string;
  state?: TextareaBorderProps;
  width?: string;
  height?: string;
  description?: string;
  helperText?: string;
  errorText?: string;
  charLimit?: number;
  mustInput?: boolean;
  isError?: boolean;
  hasScrollBar?: boolean;
}

export interface TextareaProps extends DisableProps, TextareaOptions {}
