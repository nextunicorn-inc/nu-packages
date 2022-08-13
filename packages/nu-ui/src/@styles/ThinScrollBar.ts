import { css } from '@emotion/react';
import { Color } from '../@foundations';

export const ThinScrollBar = css`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${Color.blueGray0};
  }

  ::-webkit-scrollbar-thumb {
    border: 2px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
      inset 1px 1px 0px rgba(0, 0, 0, 0.05);
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
