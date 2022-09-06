import { InputHTMLAttributes, FC, SVGProps } from 'react';
import { ReactStandardProps } from '@nextunicorn/types';

export interface InputOptions extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string;
  width?: string;
  inputSize?: 'large' | 'small';
  description?: string;
  innerLabel?: string;
  helperText?: string;
  errorText?: string;
  charLimit?: number;
  unitText?: string;
  mustInput?: boolean;
  isError?: boolean;
  textAlignRight?: boolean;
  disableEnterSubmit?: boolean;
  isSearch?: boolean;
  prefixIcon?: FC<SVGProps<SVGSVGElement>>;
  suffixIcon?: FC<SVGProps<SVGSVGElement>>;
}

export interface InputProps extends ReactStandardProps, InputOptions {}
