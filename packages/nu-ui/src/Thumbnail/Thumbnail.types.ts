import React from 'react';

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
  cover?: React.ReactNode;
  alt?: string;
  hasBadge?: boolean;
  isPlay?: boolean;
  hasSrc?: boolean;
};

export interface ThumbnailProps
  extends React.BaseHTMLAttributes<HTMLDivElement>,
    ThumbnailOptions {}
