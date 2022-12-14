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
  unicornBlue1: '#D6E8FF',
  unicornBlue2: '#B8D7FF',
  unicornBlue3: '#99C4FF',
  unicornBlue4: '#66A8FF',
  unicornBlue5: '#338BFF',
  unicornBlue6: '#006EFF', // primary
  unicornBlue7: '#0052CE',
  unicornBlue8: '#003899',
  unicornBlue9: '#001E5F',

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

  // FIXME: LightPurple
  lightPurple: '#DCD2FF',

  // FIXME: CoolGray
  coolGray: '#E1E6F5',

  // FIXME: ShineBlue
  shineBlue: '#00EBE6',

  // FIXME: LightBlue
  lightBlue: '#BEF0FF',

  // FIXME: Overlay
  overlay: '#00000066',

  // FIXME: Surface
  surface: '#F8F8F8',

  // FIXME: AngelsGray
  angelsGray0: '#FDFDFD',
  angelsGray1: '#F2F2F2',
  angelsGray2: '#E1E1E1',
  angelsGray3: '#CDCDCD',
  angelsGray4: '#B1B1B1',
  angelsGray5: '#989898',
  angelsGray6: '#808080',
  angelsGray7: '#646464',
  angelsGray8: '#464646',
  angelsGray9: '#202020',

  // FIXME: AngelsBlue
  angelsBlue0: '#D9FFFF',
  angelsBlue1: '#A3FEFC',
  angelsBlue2: '#6CFAF7',
  angelsBlue3: '#36F4F0',
  angelsBlue4: '#00EBE6',
  angelsBlue5: '#00C6C2',
  angelsBlue6: '#00A29E',
  angelsBlue7: '#007D7A',
  angelsBlue8: '#005857',
  angelsBlue9: '#003433',

  // FIXME: AngelsLightPurple
  angelsLightPurple0: '#F7F5FF',
  angelsLightPurple1: '#F0ECFF',
  angelsLightPurple2: '#E9E3FF',
  angelsLightPurple3: '#E3DAFF',
  angelsLightPurple4: '#DCD2FF',
  angelsLightPurple5: '#C9BCEA',
  angelsLightPurple6: '#B7A7D4',
  angelsLightPurple7: '#A593BF',
  angelsLightPurple8: '#9480A9',
  angelsLightPurple9: '#836D94',

  // FIXME: AngelsLightBlue
  angelsLightBlue0: '#F1FDFF',
  angelsLightBlue1: '#E6F9FF',
  angelsLightBlue2: '#DAF5FE',
  angelsLightBlue3: '#CEEFFE',
  angelsLightBlue4: '#C3E9FD',
  angelsLightBlue5: '#ADD4EA',
  angelsLightBlue6: '#99BFD4',
  angelsLightBlue7: '#85A9BF',
  angelsLightBlue8: '#7293A9',
  angelsLightBlue9: '#607D94',
};

export const colorList: ColorKey[] = Object.keys(Color) as ColorKey[];

export default Color;
