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

/**
 * @desc font-weight가 정의된 객체입니다.
 * @description {extrabold} font-weight: 800;
 * @description {bold} font-weight: 700;
 * @description {semibold} font-weight: 600;
 * @description {medium} font-weight: 500;
 * @description {regular} font-weight: 400;
 */
export const FontWeight: FontWeightTypes = {
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
