import Color from '../Color';

import type ThemeType from './Theme.types';

const Theme: ThemeType = {
  Common: {
    surface: Color.naturalGray0,
    disabled: Color.naturalGray4,
    placeholder: Color.naturalGray5,
    text: Color.naturalGray7,
    subtitle: Color.naturalGray8,
    title: Color.naturalGray9,
    background: Color.blueGray0,
    primary: Color.unicornBlue6,
    alert: Color.coral6,
    error: Color.coral6,
  },

  HelperBgColor: {
    light: Color.unicornBlue6,
    dark: Color.unicornBlue4,
  },

  HelperTextColor: {
    light: Color.unicornBlue2,
    dark: Color.unicornBlue5,
    error: Color.coral6,
    gray: Color.naturalGray7,
  },
};

export default Theme;
