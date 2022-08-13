import styled from '@emotion/styled';
import RcCheckbox from 'rc-checkbox';
import { Color } from '../@foundations';
import { css } from '@emotion/react';

export const NURadio = styled(RcCheckbox)`
  display: none;
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;

  svg {
    display: inline-flex;
    margin: auto;
  }

  &::after {
    position: absolute;
    content: '';
    width: 28px;
    height: 28px;
    background-color: transparent;
  }
`;

export const Span = styled.span`
  padding-left: 4px;
`;

export const DSRadioWrapper = styled.label<{ $disabled?: boolean; $checked: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

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
    height: 28px;
  }

  &:hover {
    ${({ $disabled }) =>
      $disabled
        ? `
            cursor: not-allowed;
            color: ${Color.naturalGray3};
          `
        : 'cursor: pointer'};

    &::before {
      pointer-events: auto;
    }

    ${IconContainer}::after {
      content: '';
      border-radius: 20px;
      z-index: -1;
      background-color: ${({ $checked }) => ($checked ? Color.unicornBlue0 : Color.blueGray0)};
      pointer-events: auto;
    }
  }
`;
