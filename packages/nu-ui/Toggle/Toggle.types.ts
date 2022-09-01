import { InputHTMLAttributes, ReactNode } from 'react';

export interface PointerCoordinates {
  x?: number;
  y?: number;
}

export interface ToggleIcons {
  checked?: ReactNode | undefined;
  unchecked?: ReactNode | undefined;
}

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  'aria-labelledby'?: string | undefined;
  'aria-label'?: string | undefined;
  icons?: boolean | ToggleIcons | undefined;
}
