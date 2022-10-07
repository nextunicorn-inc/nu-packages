import type { InputHTMLAttributes, ReactNode } from 'react';
import type { ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export interface PointerCoordinates {
  x?: number;
  y?: number;
}

export interface ToggleIcons {
  checked?: ReactNode | undefined;
  unchecked?: ReactNode | undefined;
}

type ToggleOptions = {
  'aria-labelledby'?: string | undefined;
  'aria-label'?: string | undefined;
  icons?: boolean | ToggleIcons | undefined;
};

export interface ToggleProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ReactStandardProps,
    EmotionCSSProps,
    ToggleOptions {}
