import { GenericObject } from '@nextunicorn-inc/nu-types';

export type Common =
  | 'surface'
  | 'disabled'
  | 'placeholder'
  | 'text'
  | 'subtitle'
  | 'title'
  | 'background'
  | 'primary'
  | 'alert'
  // custom
  | 'error';

export type HelperBgColor = 'light' | 'dark';

export type HelperTextColor = 'light' | 'dark' | 'gray' | 'error';

interface ThemeType {
  [category: string]: GenericObject<string>;

  Common: GenericObject<string>;
  HelperBgColor: GenericObject<string>;
  HelperTextColor: GenericObject<string>;
}

export default ThemeType;
