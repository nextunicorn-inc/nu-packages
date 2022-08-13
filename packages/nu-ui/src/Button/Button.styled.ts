import styled from '@emotion/styled';
import { ButtonSize, ButtonVariant } from './Button.types';
import { Color } from '../@foundations';

const hoverVariantCSS = {
  primary: `
    &:hover {
      background-color: ${Color.unicornBlue7};
    }
  `,
  secondary: `
    &:hover {
      background-color: ${Color.unicornBlue0};
      border: 1px solid ${Color.unicornBlue7};
    }
  `,
  tertiary: `
    &:hover {
      background-color: ${Color.blueGray1};
    }
  `,
};

const variantCSS = {
  primary: `
    background-color: ${Color.unicornBlue6};
    color: ${Color.naturalGray0};
  `,
  secondary: `
    background-color: ${Color.naturalGray0};
    color: ${Color.unicornBlue6};
    border: 1px solid ${Color.unicornBlue6};
  `,
  tertiary: `
    background-color: ${Color.blueGray0};
    color: ${Color.naturalGray7};
  `,
};

const paddingSizeCSS = {
  large: `
    padding: 14px 20px;
  `,
  medium: `
    padding: 10px 16px;
  `,
  small: `
    padding: 6px 12px;
  `,
};

const disabledCSS = {
  primary: `
    opacity: 0.3;
  `,
  secondary: `
    opacity: 0.5;
  `,
  tertiary: `
    opacity: 0.5;
    color: ${Color.naturalGray3};
  `,
};

type LayoutProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $isBlock: boolean;
  $disabled: boolean;
};

export const DSButtonWrapper = styled.button<LayoutProps>`
  ${({ $size }) => paddingSizeCSS[$size]};
  ${({ $variant, $disabled }) => ($disabled ? disabledCSS[$variant] : '')};
  ${({ $variant }) => variantCSS[$variant]};
  ${({ $isBlock }) => ($isBlock ? 'width: 100%' : 'width: fit-content')};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  white-space: pre;
  ${({ $variant, $disabled }) =>
    !$disabled
      ? `
          ${hoverVariantCSS[$variant]};
        `
      : `
          &:hover {
            cursor: not-allowed;
          }
        `};
`;
