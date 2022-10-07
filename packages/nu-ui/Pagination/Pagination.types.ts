import type { DisableProps, ReactStandardProps } from '@nextunicorn/types';
//
import type EmotionCSSProps from '../@utils/types';

export type PaginationType = 'default' | 'extra';

export type PaginationSize = 'large' | 'small';

export type PaginationAction = 'page' | 'prev' | 'next';

interface PaginationOptions {
  type?: PaginationType;
  size?: PaginationSize;
  page: number;
  totalPage: number;
  visiblePageList: number;
  onChangePage: (page: number, type: PaginationAction) => void;
}

export interface PaginationItemProps {
  size: PaginationSize;
  currentPageNumber: number;
  pageNumber: number;
  onClick: (page: number) => void;
}

export interface PaginationProps
  extends DisableProps,
    ReactStandardProps,
    EmotionCSSProps,
    PaginationOptions {}
