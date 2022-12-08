import { css } from '@emotion/react';
import { mediaQuery } from '../@styles';
import { BREAK_POINT } from '../@constants';

export const ResponsiveSectionCss = css`
  width: 100%;
  max-width: 1304px;
  padding: 0 32px;
  ${mediaQuery(BREAK_POINT.small)} {
    padding: 0 20px;
  }
`;
