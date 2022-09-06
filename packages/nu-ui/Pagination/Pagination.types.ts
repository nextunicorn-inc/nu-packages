import { DisableProps, ReactStandardProps } from '@nextunicorn/types';

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

export type PaginationItemState = 'default' | 'hover' | 'focused';

export interface PaginationItemProps {
  size: PaginationSize;
  currentPageNumber: number;
  pageNumber: number;
  onClick: (page: number) => void;
}

export interface PaginationProps extends DisableProps, ReactStandardProps, PaginationOptions {}
