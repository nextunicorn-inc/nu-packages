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

type ThemeType = {
  Common: { [key in Common]: string };
  HelperBgColor: { [key in HelperBgColor]: string };
  HelperTextColor: { [key in HelperTextColor]: string };
};

export default ThemeType;
