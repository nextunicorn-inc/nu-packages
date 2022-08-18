import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color } from '../@foundations';

import type { PaginationSize, PaginationType } from './Pagination.types';

export const DSPaginationWrapper = styled.div<{
  $type: PaginationType;
  $size: PaginationSize;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ $size }) => ($size === 'large' ? '1em' : '0.6em')};
`;

export const PrevButton = styled.button<{ $disabled: boolean }>`
  padding: 4px;
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `};

  &:hover {
    cursor: ${({ $disabled }) => $disabled && 'not-allowed'};
  }
`;

export const Waiting = styled.div`
  padding: 4px;
`;

export const NextButton = styled.button<{ $disabled: boolean }>`
  padding: 4px;
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `};

  &:hover {
    cursor: ${({ $disabled }) => $disabled && 'not-allowed'};
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const sizeCSS = {
  large: css`
    width: 36px;
    height: 36px;
    margin: 0 4px;
    font-size: 14px;
    line-height: 20px;
  `,
  small: css`
    width: 32px;
    height: 32px;
    margin: 0 2px;
    font-size: 12px;
    line-height: 18px;
  `,
};

export const Page = styled.div<{
  $size: PaginationSize;
  $selected: boolean;
}>`
  background-color: ${({ $selected }) => ($selected ? Color.unicornBlue6 : Color.naturalGray0)};
  color: ${({ $selected }) => ($selected ? Color.naturalGray0 : Color.naturalGray7)};
  ${({ $size }) => sizeCSS[$size]}
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $selected }) =>
    !$selected &&
    css`
      &:hover {
        background-color: ${Color.blueGray1};
        color: ${Color.naturalGray8};
        cursor: pointer;
      }
    `}
`;
