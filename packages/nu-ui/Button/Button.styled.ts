import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonSize, ButtonVariant } from './Button.types';
import { Color, FontSize, FontWeight } from '../@foundations';

const variantCSS = {
  primary: css`
    border-radius: 5px;

    color: ${Color.naturalGray0};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.unicornBlue6};
  `,
  secondary: css`
    border-radius: 5px;
    border: 1px solid ${Color.unicornBlue6};

    color: ${Color.unicornBlue6};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.naturalGray0};
  `,
  tertiary: css`
    border-radius: 5px;

    color: ${Color.naturalGray7};
    ${FontSize.p3};
    ${FontWeight.regular};

    background-color: ${Color.blueGray0};
  `,
  'angels-primary': css`
    border-radius: 2px;

    color: ${Color.angelsGray0};
    ${FontSize['angels-p2']};
    ${FontWeight.medium};

    background-color: ${Color.angelsGray9};
  `,
  'angels-secondary': css`
    border-radius: 2px;
    border: 1px solid ${Color.angelsGray8};

    color: ${Color.angelsGray8};
    ${FontSize['angels-p2']};
    ${FontWeight.medium};

    background-color: ${Color.angelsGray0};
  `,
  'angels-tertiary': css`
    border-radius: 2px;

    color: ${Color.naturalGray7};
    ${FontSize['angels-p2']};
    ${FontWeight.medium};

    background-color: ${Color.blueGray0};
  `,
};

const hoverVariantCSS = {
  primary: `
    &:hover {
      background-color: ${Color.unicornBlue7};
    }
  `,
  secondary: `
    &:hover {
      border: 1px solid ${Color.unicornBlue6};
      
      background-color: ${Color.unicornBlue0};
    }
  `,
  tertiary: `
    &:hover {
      background-color: ${Color.blueGray1};
    }
  `,
  'angels-primary': `
    &:hover {
      background-color: ${Color.angelsGray7};
    }
  `,
  'angels-secondary': `
    &:hover {
      border: 1px solid ${Color.angelsGray8};
      
      background-color: ${Color.angelsGray1};
    }
  `,
  'angels-tertiary': `
    &:hover {
      background-color: ${Color.blueGray1};
    }
  `,
};

const sizeCSS = {
  large: `
    height: 48px;
    padding: 0 20px;
  `,
  medium: `
    height: 40px;
    padding: 0 16px;
  `,
  small: `
    height: 32px;
    padding: 0 12px;
  `,
};

const disabledCSS = {
  primary: `
    background-color: ${Color.unicornBlue2};
  `,
  secondary: `
    border: 1px solid ${Color.unicornBlue3};
    
    color: ${Color.unicornBlue3};
  `,
  tertiary: `
    color: ${Color.naturalGray3};
    
    background-color: ${Color.blueGray0};
  `,
  'angels-primary': `
    background-color: ${Color.angelsGray3};
  `,
  'angels-secondary': `
    border: 1px solid ${Color.angelsGray3};

    color: ${Color.angelsGray3};

    background-color: ${Color.naturalGray0};
  `,
  'angels-tertiary': `
    color: ${Color.angelsGray2};

    background-color: ${Color.angelsGray1};
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

  ${({ $size }) => sizeCSS[$size]};

  transition: all 0.2s ease-in-out;

  white-space: pre;

  ${({ $variant, $disabled }) =>
    !$disabled
      ? hoverVariantCSS[$variant]
      : `
          ${disabledCSS[$variant]}
          &:hover {
            cursor: not-allowed;
          }
        `};
`;
