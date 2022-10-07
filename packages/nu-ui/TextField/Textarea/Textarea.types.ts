import type { TextareaHTMLAttributes } from 'react';
import type { DisableProps, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../../@utils/types';

export type TextareaBorderProps = 'inactive' | 'focus' | 'active' | 'alert';

interface TextareaOptions extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  applyMaxLength?: boolean;
}

export interface TextareaProps
  extends DisableProps,
    ReactStandardProps,
    EmotionCSSProps,
    TextareaOptions {}
