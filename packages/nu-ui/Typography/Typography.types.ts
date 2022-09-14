import { FontSizeKey, FontWeightKey } from '../@foundations';
import { ChildrenProps } from '@nextunicorn/types';

interface TypoOptions {
  color?: string;
  size?: FontSizeKey;
  weight?: FontWeightKey;
}

export default interface TypoProps extends ChildrenProps, TypoOptions {}
