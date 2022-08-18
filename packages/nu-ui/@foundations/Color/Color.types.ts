type NaturalGrayColor =
  | 'naturalGray0'
  | 'naturalGray1'
  | 'naturalGray2'
  | 'naturalGray3'
  | 'naturalGray4'
  | 'naturalGray5'
  | 'naturalGray6'
  | 'naturalGray7'
  | 'naturalGray8'
  | 'naturalGray9';

type BlueGrayColor =
  | 'blueGray0'
  | 'blueGray1'
  | 'blueGray2'
  | 'blueGray3'
  | 'blueGray4'
  | 'blueGray5'
  | 'blueGray6'
  | 'blueGray7'
  | 'blueGray8'
  | 'blueGray9';

type UnicornBlueColor =
  | 'unicornBlue0'
  | 'unicornBlue1'
  | 'unicornBlue2'
  | 'unicornBlue3'
  | 'unicornBlue4'
  | 'unicornBlue5'
  | 'unicornBlue6'
  | 'unicornBlue7'
  | 'unicornBlue8'
  | 'unicornBlue9';

type CoralColor =
  | 'coral0'
  | 'coral1'
  | 'coral2'
  | 'coral3'
  | 'coral4'
  | 'coral5'
  | 'coral6'
  | 'coral7'
  | 'coral8'
  | 'coral9';

type YellowOrangeColor =
  | 'yellowOrange0'
  | 'yellowOrange1'
  | 'yellowOrange2'
  | 'yellowOrange3'
  | 'yellowOrange4'
  | 'yellowOrange5'
  | 'yellowOrange6'
  | 'yellowOrange7'
  | 'yellowOrange8'
  | 'yellowOrange9';

type GreenColor =
  | 'green0'
  | 'green1'
  | 'green2'
  | 'green3'
  | 'green4'
  | 'green5'
  | 'green6'
  | 'green7'
  | 'green8'
  | 'green9';

type OverlayColor = 'overlay';

export type ColorKey =
  | NaturalGrayColor
  | BlueGrayColor
  | UnicornBlueColor
  | CoralColor
  | YellowOrangeColor
  | GreenColor
  | OverlayColor;

export type ColorType = Record<ColorKey, string>;
