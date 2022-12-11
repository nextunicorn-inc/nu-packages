import { PaletteKey, PaletteType } from './Palette.types';

const Palette: PaletteType = {
  // FIXME: Other Colors
  White: '#ffffff',
  Black: '#000000',

  // FIXME: Gray Palette
  Gray10: '#fcfcfc',
  Gray15: '#f5f5f5',
  Gray20: '#efefef',
  Gray25: '#e8e8e8',
  Gray30: '#dfdfdf',
  Gray35: '#c8c8c8',
  Gray40: '#b7b7b7',
  Gray45: '#949494',
  Gray50: '#777777',
  Gray60: '#616161',
  Gray70: '#555555',
  Gray80: '#3f3f3f',
  Gray90: '#2a2a2a',
  Gray100: '#1a1a1a',

  // FIXME: CoolGray Palette
  CoolGray5: '#f6f7f9',
  CoolGray10: '#f2f4f8',
  CoolGray20: '#dde1e6',
  CoolGray30: '#c1c7cd',
  CoolGray40: '#a2a9b0',
  CoolGray50: '#878d96',
  CoolGray60: '#697077',
  CoolGray70: '#4d5358',
  CoolGray80: '#343a3f',
  CoolGray90: '#21272a',
  CoolGray100: '#121619',

  // FIXME: Black Palette
  Black10: '#0000001a',
  Black20: '#00000033',
  Black30: '#0000004d',
  Black40: '#00000066',
  Black50: '#00000080',
  Black60: '#00000099',
  Black70: '#000000b3',
  Black80: '#000000cc',
  Black90: '#000000e6',

  // FIXME: White Palette
  White10: '#ffffff1a',
  White20: '#ffffff33',
  White30: '#ffffff4d',
  White40: '#ffffff66',
  White50: '#ffffff80',
  White60: '#ffffff99',
  White70: '#ffffffb3',
  White80: '#ffffffcc',
  White90: '#ffffffe6',

  // FIXME: Shine Blue Palette
  ShineBlue10: '#d9ffff',
  ShineBlue20: '#a3fefc',
  ShineBlue30: '#6cfaf7',
  ShineBlue40: '#36f4f0',
  ShineBlue50: '#00ebe6', // primary
  ShineBlue60: '#00c6c2',
  ShineBlue70: '#00a29e',
  ShineBlue80: '#007d7a',
  ShineBlue90: '#005857',
  ShineBlue100: '#003433',

  // FIXME: Blue Palette
  Blue10: '#f0f6ff',
  Blue20: '#d6e8ff',
  Blue30: '#b8d7ff',
  Blue40: '#99c4ff',
  Blue50: '#66a8ff',
  Blue60: '#006eff',
  Blue70: '#0052ce',
  Blue80: '#003899',
  Blue90: '#001e5f',
  Blue100: '#001141',

  // FIXME: Red Palette
  Red10: '#fff1f1',
  Red20: '#ffd7d9',
  Red30: '#ffb3b8',
  Red40: '#ff8389',
  Red50: '#fa4d56',
  Red60: '#da1e28',
  Red70: '#a2191f',
  Red80: '#750e13',
  Red90: '#520408',
  Red100: '#2d0709',

  // FIXME: Yellow Palette
  Yellow10: '#fcf4d6',
  Yellow20: '#fddc69',
  Yellow30: '#f1c21b',
  Yellow40: '#d2a106',
  Yellow50: '#b28600',
  Yellow60: '#8e6a00',
  Yellow70: '#684e00',
  Yellow80: '#483700',
  Yellow90: '#302400',
  Yellow100: '#1c1500',

  // FIXME: Orange Palette
  Orange10: '#fff2e8',
  Orange20: '#ffd9be',
  Orange30: '#ffb784',
  Orange40: '#ff832b',
  Orange50: '#eb6200',
  Orange60: '#ba4e00',
  Orange70: '#8a3800',
  Orange80: '#5e2900',
  Orange90: '#3e1a00',
  Orange100: '#231000',

  // FIXME: Purple Palette
  Purple10: '#f6f2ff',
  Purple20: '#e8daff',
  Purple30: '#d4bbff',
  Purple40: '#be95ff',
  Purple50: '#a56eff',
  Purple60: '#8a3ffc',
  Purple70: '#6929c4',
  Purple80: '#491d8b',
  Purple90: '#31135e',
  Purple100: '#1c0f30',

  // FIXME: Magenta Palette
  Magenta10: '#fff0f7',
  Magenta20: '#ffd6e8',
  Magenta30: '#ffafd2',
  Magenta40: '#ff7eb6',
  Magenta50: '#ee5396',
  Magenta60: '#d02670',
  Magenta70: '#9f1853',
  Magenta80: '#740937',
  Magenta90: '#510224',
  Magenta100: '#2a0a18',

  // FIXME: Green Palette
  Green10: '#defbe6',
  Green20: '#a7f0ba',
  Green30: '#6fdc8c',
  Green40: '#42be65',
  Green50: '#24a148',
  Green60: '#198038',
  Green70: '#0e6027',
  Green80: '#044317',
  Green90: '#022d0d',
  Green100: '#071908',
};

export const paletteList: PaletteKey[] = Object.keys(Palette) as PaletteKey[];

export default Palette;
