import styled from '@emotion/styled';
import { Color } from '../@foundations';
import { BadgeColor, BadgeKind, BadgeSize } from './Badge.types';
import { css, SerializedStyles } from '@emotion/react';

const colorCSS: Record<BadgeColor, SerializedStyles> = {
  lightCoral: css`
    color: ${Color.coral4};
    background-color: ${Color.coral0};
  `,
  coral: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.coral4};
  `,
  lightYellow: css`
    color: ${Color.yellowOrange5};
    background-color: ${Color.yellowOrange0};
  `,
  yellow: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.yellowOrange5};
  `,
  lightBlue: css`
    color: ${Color.unicornBlue5};
    background-color: ${Color.unicornBlue0};
  `,
  blue: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.unicornBlue5};
  `,
  deepBlue: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.unicornBlue7};
  `,
  lightGray: css`
    color: ${Color.naturalGray7};
    background-color: ${Color.blueGray0};
  `,
  gray: css`
    color: ${Color.blueGray8};
    background-color: ${Color.blueGray3};
  `,
  deepGray: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.blueGray7};
  `,
  black: css`
    color: ${Color.naturalGray0};
    background-color: ${Color.blueGray9};
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
          color: ${Color.blueGray8};
          border: 1px solid ${Color.blueGray8};
        `
      : colorCSS[$color]};
  ${({ $size }) => sizeCSS[$size]};
  width: fit-content;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
`;
