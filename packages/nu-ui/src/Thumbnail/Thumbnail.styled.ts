import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from '../@foundations';
import { ThumbnailCategory, ThumbnailSize } from './Thumbnail.types';

const categoryCSS = {
  '1by1': css`
    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  `,
  '2by3': css`
    &::before {
      content: '';
      display: block;
      padding-top: 66.666%;
    }
  `,
  '16by9': css`
    content: '';
    display: block;
    padding-top: 56.25%;
  `,
};

const sizeCSS = {
  xxlarge: `
    width: 160px;
    height: 160px;
  `,
  xlarge: `
    width: 130px;
    height: 130px;
  `,
  large: `
    width: 100px;
    height: 100px;
  `,
  medium: `
    width: 68px;
    height: 68px;
  `,
  small: `
    width: 48px;
    height: 48px;
  `,
  xsmall: `
    width: 36px;
    height: 36px;
  `,
  xxsmall: `
    width: 28px;
    height: 28px;
  `,
  xxxsmall: `
    width: 20px;
    height: 20px;
  `,
};

export const DSThumbnailWrapper = styled.div<{
  $category: ThumbnailCategory;
  $width: string;
  $size: ThumbnailSize;
}>`
  width: ${({ $width }) => $width};
  ${({ $category, $size }) => $category === '1by1' && $size && sizeCSS[$size]};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const RatioBox = styled.div<{ $category: ThumbnailCategory; $hasSrc: boolean }>`
  position: relative;
  ${({ $category }) => $category && categoryCSS[$category]};
  border-radius: 5px;
  border: 1px solid ${Color.blueGray1} !important;
  background-color: ${({ $hasSrc }) =>
    $hasSrc
      ? css`
          ${Color.naturalGray0}
        `
      : css`
          ${Color.blueGray1}
        `};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 5px !important;
    overflow: unset !important;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    border-radius: 5px !important;
  }
`;
