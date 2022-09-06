import { ColorKey, ColorType } from './Color.types';

const Color: ColorType = {
  // FIXME: NaturalGray
  naturalGray0: '#FEFEFE', // surface
  naturalGray1: '#F5F5F5',
  naturalGray2: '#E6E6E6',
  naturalGray3: '#D1D1D1',
  naturalGray4: '#B3B3B3', // disabled
  naturalGray5: '#989898', // placeholder
  naturalGray6: '#808080',
  naturalGray7: '#616161', // text
  naturalGray8: '#424242', // subtitle
  naturalGray9: '#262626',

  // FIXME: BlueGray
  blueGray0: '#F6F7F8', // background
  blueGray1: '#E8EAED',
  blueGray2: '#D6DAE0',
  blueGray3: '#C5CAD3',
  blueGray4: '#A8AFBD',
  blueGray5: '#8B94A7',
  blueGray6: '#6D7992',
  blueGray7: '#586174',
  blueGray8: '#424957',
  blueGray9: '#2C313A',

  // FIXME: UnicornBlue
  unicornBlue0: '#F0F6FF',
  unicornBlue1: '#D6E7FF',
  unicornBlue2: '#B8D6FF',
  unicornBlue3: '#99C4FF',
  unicornBlue4: '#66A7FF',
  unicornBlue5: '#3389FF',
  unicornBlue6: '#006CFF', // primary
  unicornBlue7: '#0057CE',
  unicornBlue8: '#004099',
  unicornBlue9: '#002B66',

  // FIXME: Coral
  coral0: '#FFF0F0',
  coral1: '#FFD6D6',
  coral2: '#FFB8B8',
  coral3: '#FF999A',
  coral4: '#FF6667',
  coral5: '#FF3334',
  coral6: '#F00001', // alert
  coral7: '#CC0001',
  coral8: '#990001',
  coral9: '#660001',

  // FIXME: YellowOrange
  yellowOrange0: '#FFF6E5',
  yellowOrange1: '#FFEDCC',
  yellowOrange2: '#FFE2AD',
  yellowOrange3: '#FFD78F',
  yellowOrange4: '#FFC866',
  yellowOrange5: '#FFB633',
  yellowOrange6: '#F09A00',
  yellowOrange7: '#CC8300',
  yellowOrange8: '#996200',
  yellowOrange9: '#664200',

  // FIXME: Green
  green0: '#F4FBF4',
  green1: '#E2F5E0',
  green2: '#CCEDC9',
  green3: '#B7E5B3',
  green4: '#92D98C',
  green5: '#6FCC66',
  green6: '#4ABF40',
  green7: '#3B9933',
  green8: '#2C7326',
  green9: '#1D4D19',

  // FIXME: Overlay
  overlay: '#00000066', // hsla(0, 0%, 0%, 0.4)
};

export const colorList: ColorKey[] = Object.keys(Color) as ColorKey[];

export default Color;
