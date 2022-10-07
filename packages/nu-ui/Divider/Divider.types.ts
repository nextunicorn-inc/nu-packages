import type { HTMLAttributes } from 'react';
import type { ReactStandardProps } from '@nextunicorn/types';
//
import EmotionCSSProps from '../@utils/types';

type DividerOptions = {
  type?: 'hr';
  text?: string;
};

export default interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    ReactStandardProps,
    DividerOptions,
    EmotionCSSProps {}
