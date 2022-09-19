import styled from '@emotion/styled';
import { BREAK_POINT } from '../@constants';
import { mediaQuery } from '../@styles';

const LargeMediumViewport = styled.div`
  display: initial;

  ${mediaQuery(BREAK_POINT.small)} {
    display: none;
  }
`;

const LargeOnlyViewport = styled.div`
  display: initial;

  ${mediaQuery(BREAK_POINT.medium)} {
    display: none;
  }
`;

const MediumOnlyViewport = styled.div`
  display: none;

  ${mediaQuery(BREAK_POINT.medium)} {
    display: initial;
  }

  ${mediaQuery(BREAK_POINT.small)} {
    display: none;
  }
`;

const MediumSmallViewport = styled.div`
  display: none;

  ${mediaQuery(BREAK_POINT.medium)} {
    display: initial;
  }
`;

const SmallOnlyViewport = styled.div`
  display: none;

  ${mediaQuery(BREAK_POINT.small)} {
    display: initial;
  }
`;

const LargeSmallViewPort = styled.div`
  ${mediaQuery(BREAK_POINT.medium)} {
    display: none;
  }

  ${mediaQuery(BREAK_POINT.small)} {
    display: unset;
  }
`;

export const Viewport = {
  LargeMedium: LargeMediumViewport,
  LargeOnly: LargeOnlyViewport,
  MediumOnly: MediumOnlyViewport,
  MediumSmall: MediumSmallViewport,
  SmallOnly: SmallOnlyViewport,
  LargeSmall: LargeSmallViewPort,
};
