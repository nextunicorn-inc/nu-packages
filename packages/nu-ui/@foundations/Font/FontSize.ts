import { css } from '@emotion/react';
import { FontSizeTypes } from './FontSize.types';

export const size42 = css`
  font-size: 42px;
  line-height: 52px;
`;

export const size30 = css`
  font-size: 30px;
  line-height: 40px;
`;

export const size24 = css`
  font-size: 24px;
  line-height: 36px;
`;

export const size18 = css`
  font-size: 18px;
  line-height: 26px;
`;

export const size16 = css`
  font-size: 16px;
  line-height: 24px;
`;

export const size14 = css`
  font-size: 14px;
  line-height: 20px;
`;

export const size12 = css`
  font-size: 12px;
  line-height: 18px;
`;

export const size10 = css`
  font-size: 10px;
  line-height: 14px;
`;

export const FontSize: FontSizeTypes = {
  h1: css`
    font-size: 42px;
    line-height: 52px;
  `,
  h2: css`
    font-size: 30px;
    line-height: 40px;
  `,
  h3: css`
    font-size: 24px;
    line-height: 36px;
  `,
  h4: css`
    font-size: 18px;
    line-height: 26px;
  `,
  p1: css`
    font-size: 16px;
    line-height: 24px;
  `,
  p2: css`
    font-size: 14px;
    line-height: 20px;
  `,
  p3: css`
    font-size: 12px;
    line-height: 18px;
  `,
  p4: css`
    font-size: 10px;
    line-height: 14px;
  `,
  'angels-h4': css`
    font-size: 18px;
    line-height: 140%;
  `,
  'angels-p1': css`
    font-size: 16px;
    line-height: 140%;
  `,
  'angels-p2': css`
    font-size: 14px;
    line-height: 140%;
  `,
  'angels-p3': css`
    font-size: 12px;
    line-height: 140%;
  `,
  'angels-p4': css`
    font-size: 10px;
    line-height: 140%;
  `,
};
