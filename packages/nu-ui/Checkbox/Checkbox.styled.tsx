import styled from '@emotion/styled';
import RcCheckbox from 'rc-checkbox';
import { Color } from '../@foundations';
import { css } from '@emotion/react';

export const NUCheckbox = styled(RcCheckbox)`
  display: none;
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  z-index: 5;

  svg {
    display: inline-flex;
    margin: auto;
    z-index: 5;
  }

  &::after {
    position: absolute;
    content: '';
    width: 28px;
    height: 28px;
    border-radius: 20px;
    background-color: transparent;
  }

  &:hover::after {
    z-index: 3;
    pointer-events: auto;
    background-color: ${Color.blueGray0};
  }
`;

export const Span = styled.span`
  padding-left: 4px;
  z-index: 5;
`;

export const DSCheckboxWrapper = styled.label<{ $disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  z-index: 5;

  ${({ $disabled }) =>
    $disabled
      ? css`
          cursor: not-allowed;
          ${Span} {
            color: ${Color.naturalGray3};
          }
        `
      : css`
          ${Span} {
            color: ${Color.naturalGray7};
          }
        `};

  &::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    pointer-events: auto;
  }

  &:hover {
    ${({ $disabled }) =>
      $disabled
        ? `
            cursor: not-allowed;
            color: ${Color.naturalGray3};
          `
        : 'cursor: pointer;'};
  }
`;
