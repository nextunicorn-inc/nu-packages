import { css } from '@emotion/react';

type NumLine = 1 | 2 | 3 | 4;

export const dynamicLineClamp =
  (num: NumLine = 1) =>
  () =>
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${num};
    `;
