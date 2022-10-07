import { ReactStandardProps } from '@nextunicorn/types';
//
import EmotionCSSProps from '../@utils/types';

type ChipOptions = {
  text?: string;
  closeable?: boolean;
  onClose?: () => void;
};

export interface ChipProps extends ReactStandardProps, EmotionCSSProps, ChipOptions {}
