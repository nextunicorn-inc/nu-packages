import styled from '@emotion/styled';
import { BREAK_POINT } from '../@constants';
import {
  MOBILE_GLOBAL_PADDING,
  MOBILE_GUTTER,
  MOBILE_MAX_LAYOUT_SYSTEM_WIDTH,
  PC_GLOBAL_PADDING,
  PC_GUTTER,
  PC_MAX_LAYOUT_SYSTEM_WIDTH,
  TABLET_GLOBAL_PADDING,
  TABLET_GUTTER,
  TABLET_MAX_LAYOUT_SYSTEM_WIDTH,
} from './ResponsiveLayout.const';
import { mediaQuery } from '../@styles';

// export const widthWidePC = (n, parentColumns = WIDE_PC_COLUMNS) => css`calc((100% - (${parentColumns} - 1) * ${WIDE_PC_GUTTER}px) * ${n} / ${parentColumns} + ${(n - 1) * WIDE_PC_GUTTER}px)`;
// export const widthPC = (n, parentColumns = PC_COLUMNS) => css`calc((100% - (${parentColumns} - 1) * ${PC_GUTTER}px) * ${n} / ${parentColumns} + ${(n - 1) * PC_GUTTER}px)`;
// export const widthTablet = (n, parentColumns = TABLET_COLUMNS) => css`calc((100% - (${parentColumns} - 1) * ${TABLET_GUTTER}px) * ${n} / ${parentColumns} + ${(n - 1) * TABLET_GUTTER}px)`;
// export const widthMobile = (n, parentColumns = MOBILE_COLUMNS) => css`calc((100% - (${parentColumns} - 1) * ${MOBILE_GUTTER}px) * ${n} / ${parentColumns} + ${(n - 1) * MOBILE_GUTTER}px)`;

// 일반적으로는 이 레아아웃 시스템으로 감싸서 사용한다.
// 최대 width가 1240px 까지 늘어난다.
export const ResponsiveLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${PC_MAX_LAYOUT_SYSTEM_WIDTH + PC_GLOBAL_PADDING * 2}px;
  padding: 0 ${PC_GLOBAL_PADDING}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  --layoutGutter: ${PC_GUTTER}px;

  ${mediaQuery(BREAK_POINT.medium)} {
    max-width: ${TABLET_MAX_LAYOUT_SYSTEM_WIDTH + TABLET_GLOBAL_PADDING * 2}px;
    padding: 0 ${TABLET_GLOBAL_PADDING}px;

    --layoutGutter: ${TABLET_GUTTER}px;
  }

  ${mediaQuery(BREAK_POINT.small)} {
    max-width: ${MOBILE_MAX_LAYOUT_SYSTEM_WIDTH + MOBILE_GLOBAL_PADDING * 2}px;
    padding: 0 ${MOBILE_GLOBAL_PADDING}px;

    --layoutGutter: ${MOBILE_GUTTER}px;
  }
`;
