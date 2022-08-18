import styled from '@emotion/styled';
import { BadgeColor, BadgeKind, BadgeSize } from './Badge.types';
import { css } from '@emotion/react';

const colorCSS = {
  lightCoral: css`
    color: var(--color-coral);
    background-color: var(--color-light-coral-pink);
  `,
  coral: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-coral);
  `,
  lightYellow: css`
    color: var(--color-yellow);
    background-color: var(--color-light-yellow);
  `,
  yellow: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-yellow);
  `,
  lightBlue: css`
    color: var(--color-unicornblue5);
    background-color: var(--color-unicornblue0);
  `,
  blue: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-unicornblue5);
  `,
  deepBlue: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-unicornblue7);
  `,
  lightGray: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-bluegray3);
  `,
  gray: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-bluegray7);
  `,
  black: css`
    color: var(--color-naturalgray0);
    background-color: var(--color-unicornblue9);
  `,
};

const sizeCSS = {
  large: css`
    padding: 2px 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  `,
  medium: css`
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  `,
  small: css`
    padding: 2px 4px;
    font-size: 10px;
    font-weight: 500;
    line-height: 14px;
  `,
};

type LayoutProps = {
  $kind?: BadgeKind;
  $size: BadgeSize;
  $color: BadgeColor;
};

export const DSBadgeWrapper = styled.div<LayoutProps>`
  ${({ $kind, $color }) =>
    $kind === 'border'
      ? css`
          color: var(--color-naturalgray7);
        `
      : colorCSS[$color]};
  ${({ $kind }) =>
    $kind === 'border' &&
    css`
      border: 1px solid var(--color-naturalgray7);
    `};
  ${({ $size }) => sizeCSS[$size]};
  width: fit-content;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
`;
