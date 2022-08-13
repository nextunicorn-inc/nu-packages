import React, { FunctionComponent, SVGProps } from 'react';
import { css } from '@emotion/react';

const withColorSVG =
  (SVGComponent: FunctionComponent<SVGProps<SVGSVGElement>>, color: string, attr?: string) => () =>
    (
      <SVGComponent
        css={css`
          path {
            ${attr ?? 'fill'}: ${color};
          }
        `}
      />
    );

export default withColorSVG;
