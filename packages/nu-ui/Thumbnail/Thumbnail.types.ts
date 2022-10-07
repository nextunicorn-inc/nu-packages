import type { BaseHTMLAttributes, ReactElement, ReactNode } from 'react';
import type { ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export type ThumbnailCategory = '1by1' | '2by3' | '16by9';

export type ThumbnailSize =
  | 'xxlarge'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'small'
  | 'xsmall'
  | 'xxsmall'
  | 'xxxsmall';

type ThumbnailOptions = {
  width?: string;
  category?: ThumbnailCategory;
  size?: ThumbnailSize;
  cover?: ReactNode | ReactElement;
  alt?: string;
  hasBadge?: boolean;
  isPlay?: boolean;
  hasSrc?: boolean;
};

export interface ThumbnailProps
  extends BaseHTMLAttributes<HTMLDivElement>,
    ReactStandardProps,
    EmotionCSSProps,
    ThumbnailOptions {}
