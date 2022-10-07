import type { ChildrenProps, ReactStandardProps } from '@nextunicorn/types';
//
import type { FontSizeKey, FontWeightKey } from '../@foundations';
import type EmotionCSSProps from '../@utils/types';

interface TypoOptions {
  color?: string;
  size?: FontSizeKey;
  weight?: FontWeightKey;
}

export default interface TypoProps
  extends ChildrenProps,
    ReactStandardProps,
    EmotionCSSProps,
    TypoOptions {}
