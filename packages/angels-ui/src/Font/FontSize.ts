import { css } from '@emotion/react';
import { FontSizeTypes } from './FontSize.types';

const FontSize: FontSizeTypes = {
  h1: css`
    font-size: 36px;
    line-height: 140%;
  `,
  h2: css`
    font-size: 30px;
    line-height: 140%;
  `,
  h3: css`
    font-size: 24px;
    line-height: 140%;
  `,
  h4: css`
    font-size: 18px;
    line-height: 140%;
  `,
  p1: css`
    font-size: 16px;
    line-height: 140%;
  `,
  p2: css`
    font-size: 14px;
    line-height: 140%;
  `,
  p3: css`
    font-size: 12px;
    line-height: 140%;
  `,
  p4: css`
    font-size: 10px;
    line-height: 140%;
  `,
};

export default FontSize;
