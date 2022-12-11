import { css } from '@emotion/react';
import styled from '@emotion/styled';
//
import Palette from '../Palette';
import Font from '../Font';
//
import type { ButtonSize, ButtonVariant } from './Button.types';

const variantCSS = {
  primary: css`
    border: 1px solid transparent;
    color: ${Palette.White};

    background-color: ${Palette.ShineBlue70};
  `,
  secondary: css`
    border: 1px solid transparent;
    color: ${Palette.White};

    background-color: ${Palette.Gray100};
  `,
  linePrimary: css`
    border: 1px solid ${Palette.ShineBlue70};
    color: ${Palette.ShineBlue70};
  `,
  lineSecondary: css`
    border: 1px solid ${Palette.Gray40};
    color: ${Palette.Gray100};
  `
};

const actionVariantCSS = {
  primary: `
   &:hover {
      background-color: ${Palette.ShineBlue60};
    }
    &:active {
      background-color: ${Palette.ShineBlue90};
    }
  `,
  secondary: `
    &:hover {
      background-color: ${Palette.Gray80};
    }
    &:active {
      background-color: ${Palette.Black};
    }
  `,
  linePrimary: `
   &:hover {
      background-color: ${Palette.Gray15};
    }
    &:active {
      background-color: ${Palette.Gray25};
    }
  `,
  lineSecondary: `
    &:hover {
      background-color: ${Palette.Gray15};
      border: 1px solid ${Palette.Gray100};
    }
    &:active {
      background-color: ${Palette.Gray25};
      border: 1px solid ${Palette.Gray100};
    }
  `
}
const disabledCSS = {
  primary: `
      color: ${Palette.Gray40};
      background-color: ${Palette.Gray20};
  `,
  secondary: `
     color: ${Palette.Gray40};
     background-color: ${Palette.Gray20};
  `,
  linePrimary: `
   color: ${Palette.Gray35};
  `,
  lineSecondary: `
   color: ${Palette.Gray35};
  `
}

const paddingSizeCSS = {
  extraLarge: `
    padding: 14px 18px;
  `,
  large: `
    padding: 12px 18px;
  `,
  medium: `
    padding: 10px 12px;
  `,
  small: `
    padding: 6px 12px;
  `,
};

type ButtonProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $isBlock: boolean;
  $disabled: boolean;
};

export const DSButtonWrapper = styled.button<ButtonProps>`
  ${({ $variant }) => variantCSS[$variant]};
  ${({ $isBlock }) => ($isBlock ? 'width: 100%' : 'width: fit-content')};

  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 6px;
  ${Font['p2']};
  ${Font.semibold};

  ${({ $size }) => paddingSizeCSS[$size]};

  transition: all 0.2s ease-in-out;

  white-space: pre;

  ${({ $variant, $disabled }) =>
    !$disabled
      ? actionVariantCSS[$variant]
      : `
          ${disabledCSS[$variant]}
          border: 1px solid ${Palette.Gray35};
          &:hover {
            cursor: not-allowed;
          }
        `};
`;
