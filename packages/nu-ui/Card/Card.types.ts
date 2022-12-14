import type { IconProps, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

type TagTypes = {
  name: string;
  link: string;
};

type CardOptions = {
  title: string;
  description: string;
  tags: TagTypes[];
  viewCount: number;
  isInvest?: boolean;
  isBookmarked?: boolean;
};

export default interface CardProps
  extends IconProps,
    ReactStandardProps,
    EmotionCSSProps,
    CardOptions {}
