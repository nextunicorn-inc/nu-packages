import { css } from '@emotion/react';
import { FontWeightTypes } from './FontWeight.types';

export const bold = css`
  font-weight: 700;
`;

export const medium = css`
  font-weight: 500;
`;

export const regular = css`
  font-weight: 400;
`;

export const FontWeight: FontWeightTypes = {
  bold: 700,
  medium: 500,
  regular: 400,
  'angels-extrabold': 800,
  'angels-bold': 700,
  'angels-semibold': 600,
  'angels-medium': 500,
  'angels-regular': 400,
};
