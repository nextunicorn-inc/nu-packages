import React from 'react';
import * as Styled from './Pagination.styled';
import { Icon20NavigationArrPrev, Icon20NavigationArrNext } from './Pagination.icons';

import type { PaginationItemProps, PaginationProps } from './Pagination.types';

const range = (start: number, end: number) => {
  const length = Math.abs(end - start) + 1;
  const { result } = Array.from({ length }).reduce(
    ({ result: temp, current }) => ({
      result: [...temp, current],
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      current: current + Math.sign(end - start),
    }),
    { current: start, result: [] },
  );

  return result;
};

const Waiting = () => (
  <Styled.Waiting>
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1C10 0.447715 10.4477 -1.35705e-07 11 -8.74228e-08C11.5523 -3.91405e-08 12 0.447715 12 1C12 1.55228 11.5523 2 11 2C10.4477 2 10 1.55228 10 1ZM5 0.999999C5 0.447715 5.44772 -5.72819e-07 6 -5.24537e-07C6.55228 -4.76254e-07 7 0.447715 7 1C7 1.55228 6.55228 2 6 2C5.44772 2 5 1.55228 5 0.999999ZM1 -9.61651e-07C0.447715 -1.00993e-06 1.35705e-07 0.447714 8.74228e-08 0.999999C3.91405e-08 1.55228 0.447715 2 1 2C1.55229 2 2 1.55228 2 0.999999C2 0.447714 1.55229 -9.13368e-07 1 -9.61651e-07Z"
        fill="#A5ABBA"
      />
    </svg>
  </Styled.Waiting>
);

const Page = ({ size = 'large', currentPageNumber, pageNumber, onClick }: PaginationItemProps) => {
  const selected = currentPageNumber === pageNumber;
  const handleClickPage = React.useCallback(() => {
    onClick(pageNumber);
  }, [onClick, pageNumber]);
  return (
    <Styled.Page $size={size} $selected={selected} onClick={handleClickPage}>
      {pageNumber}
    </Styled.Page>
  );
};

const parseTotalPage = (maxPageNumber: number, currentPageNumber: number) =>
  maxPageNumber === 0 || maxPageNumber < currentPageNumber ? currentPageNumber : maxPageNumber;

/**
 *
 * @param type
 * @param size
 * @param page 선택된 페이지
 * @param totalPage 총 페이지
 * @param visiblePageList 보여질 페이지의 개수
 * @param onChangePage
 * @constructor
 */
const Pagination = ({
  type = 'default',
  size = 'large',
  page = 1,
  totalPage = 1,
  visiblePageList = 5,
  onChangePage,
}: React.PropsWithChildren<PaginationProps>) => {
  const totalVisiblePage = parseTotalPage(totalPage, page);

  const handleClickPage = React.useCallback(
    (nextPage: number) => {
      onChangePage(nextPage, 'page');
    },
    [onChangePage],
  );

  const handleClickPrev = React.useCallback(() => {
    const prevPage = page - 1;
    if (prevPage < 1) return;
    onChangePage(prevPage, 'prev');
  }, [onChangePage, page]);

  const handleClickNext = React.useCallback(() => {
    const nextPage = page + 1;
    if (nextPage > totalVisiblePage) return;
    onChangePage(nextPage, 'next');
  }, [totalVisiblePage, onChangePage, page]);

  const visiblePages = React.useCallback(
    (isApply: 'small' | 'large') => {
      const currentPageList = Math.ceil(page / visiblePageList);
      const startPage = (currentPageList - 1) * visiblePageList + 1;
      const endPage = currentPageList * visiblePageList;
      let tempPageList: (number | string)[] = range(
        startPage,
        endPage > totalVisiblePage ? totalVisiblePage : endPage,
      );

      if (isApply === 'small') return tempPageList;
      if (startPage !== 1) {
        tempPageList = [1, 'waiting-start', ...tempPageList];
      }
      if (endPage < totalVisiblePage) {
        tempPageList = [...tempPageList, 'waiting-end', totalVisiblePage];
      }

      return tempPageList;
    },
    [totalVisiblePage, visiblePageList, page],
  );

  const disabledPrevBtn = page < 2;
  const disabledNextBtn = page + 1 > totalVisiblePage;

  return (
    <Styled.DSPaginationWrapper $type={type} $size={size}>
      <Styled.PrevButton $disabled={disabledPrevBtn} onClick={handleClickPrev}>
        <Icon20NavigationArrPrev />
      </Styled.PrevButton>
      <Styled.Pages>
        {visiblePages(size).map((pageNumber) =>
          `${pageNumber}`.startsWith('waiting') ? (
            <Waiting key={`page-${pageNumber}`} />
          ) : (
            <Page
              key={`page-${pageNumber}`}
              size={size}
              currentPageNumber={page}
              pageNumber={pageNumber as number}
              onClick={handleClickPage}
            />
          ),
        )}
      </Styled.Pages>
      <Styled.NextButton $disabled={disabledNextBtn} onClick={handleClickNext}>
        <Icon20NavigationArrNext />
      </Styled.NextButton>
    </Styled.DSPaginationWrapper>
  );
};

export default Pagination;
