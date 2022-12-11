import { css } from '@emotion/react';
import { FontWeightTypes } from './FontWeight.types';

const FontWeight: FontWeightTypes = {
  extrabold: css`
    font-weight: 800;
  `,
  bold: css`
    font-weight: 700;
  `,
  semibold: css`
    font-weight: 600;
  `,
  medium: css`
    font-weight: 500;
  `,
  regular: css`
    font-weight: 400;
  `,
};

export default FontWeight;
