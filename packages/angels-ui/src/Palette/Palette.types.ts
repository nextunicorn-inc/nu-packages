type OtherColors = 'White' | 'Black';

type GrayPalette =
  | 'Gray10'
  | 'Gray15'
  | 'Gray20'
  | 'Gray25'
  | 'Gray30'
  | 'Gray35'
  | 'Gray40'
  | 'Gray45'
  | 'Gray50'
  | 'Gray60'
  | 'Gray70'
  | 'Gray80'
  | 'Gray90'
  | 'Gray100';

type CoolGrayPalette =
  | 'CoolGray5'
  | 'CoolGray10'
  | 'CoolGray20'
  | 'CoolGray30'
  | 'CoolGray40'
  | 'CoolGray50'
  | 'CoolGray60'
  | 'CoolGray70'
  | 'CoolGray80'
  | 'CoolGray90'
  | 'CoolGray100';

type BlackPalette =
  | 'Black10'
  | 'Black20'
  | 'Black30'
  | 'Black40'
  | 'Black50'
  | 'Black60'
  | 'Black70'
  | 'Black80'
  | 'Black90';

type WhitePalette =
  | 'White10'
  | 'White20'
  | 'White30'
  | 'White40'
  | 'White50'
  | 'White60'
  | 'White70'
  | 'White80'
  | 'White90';

type ShineBluePalette =
  | 'ShineBlue10'
  | 'ShineBlue20'
  | 'ShineBlue30'
  | 'ShineBlue40'
  | 'ShineBlue50' // primary
  | 'ShineBlue60'
  | 'ShineBlue70'
  | 'ShineBlue80'
  | 'ShineBlue90'
  | 'ShineBlue100';

type BluePalette =
  | 'Blue10'
  | 'Blue20'
  | 'Blue30'
  | 'Blue40'
  | 'Blue50'
  | 'Blue60'
  | 'Blue70'
  | 'Blue80'
  | 'Blue90'
  | 'Blue100';

type RedPalette =
  | 'Red10'
  | 'Red20'
  | 'Red30'
  | 'Red40'
  | 'Red50'
  | 'Red60'
  | 'Red70'
  | 'Red80'
  | 'Red90'
  | 'Red100';

type YellowPalette =
  | 'Yellow10'
  | 'Yellow20'
  | 'Yellow30'
  | 'Yellow40'
  | 'Yellow50'
  | 'Yellow60'
  | 'Yellow70'
  | 'Yellow80'
  | 'Yellow90'
  | 'Yellow100';

type OrangePalette =
  | 'Orange10'
  | 'Orange20'
  | 'Orange30'
  | 'Orange40'
  | 'Orange50'
  | 'Orange60'
  | 'Orange70'
  | 'Orange80'
  | 'Orange90'
  | 'Orange100';

type PurplePalette =
  | 'Purple10'
  | 'Purple20'
  | 'Purple30'
  | 'Purple40'
  | 'Purple50'
  | 'Purple60'
  | 'Purple70'
  | 'Purple80'
  | 'Purple90'
  | 'Purple100';

type MagentaPalette =
  | 'Magenta10'
  | 'Magenta20'
  | 'Magenta30'
  | 'Magenta40'
  | 'Magenta50'
  | 'Magenta60'
  | 'Magenta70'
  | 'Magenta80'
  | 'Magenta90'
  | 'Magenta100';

type GreenPalette =
  | 'Green10'
  | 'Green20'
  | 'Green30'
  | 'Green40'
  | 'Green50'
  | 'Green60'
  | 'Green70'
  | 'Green80'
  | 'Green90'
  | 'Green100';

export type PaletteKey =
  | OtherColors
  | GrayPalette
  | CoolGrayPalette
  | BlackPalette
  | WhitePalette
  | ShineBluePalette
  | BluePalette
  | RedPalette
  | YellowPalette
  | OrangePalette
  | PurplePalette
  | MagentaPalette
  | GreenPalette;

export type PaletteType = Record<PaletteKey, string>;
