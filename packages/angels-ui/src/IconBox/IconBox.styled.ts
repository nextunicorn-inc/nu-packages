import styled from '@emotion/styled';
import { SizeTypes } from '@nextunicorn/types';
import { css } from '@emotion/react';

const sizeCSS = {
  large: `
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    `,
  medium: `
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
    `,
  small: `
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
    `,
};

export const DSIconBoxWrapper = styled.div<{
  $isIconOnly?: boolean;
  $size?: SizeTypes;
  $gap?: number;
}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ $size }) => $size && sizeCSS[$size]};
  ${({ $isIconOnly, $gap }) =>
    !$isIconOnly &&
    css`
      * + * {
        margin-left: ${$gap ?? 2}px;
      }
    `};
`;

export const Icon = styled.svg<{ $src: string; $fillColor?: string }>`
  background-color: ${({ $fillColor }) => $fillColor && $fillColor};
  ${({ $src }) => $src && `background-image: url(${$src})`};

  & path {
    fill: ${({ $fillColor }) => $fillColor && $fillColor};
  }
`;
