import styled from '@emotion/styled';
import { Color, FontSize, FontWeight } from '../@foundations';

import type TypoProps from './Typography.types';

export const TypographyWrapper = styled.span<TypoProps>`
  ${({ size }) => (size ? FontSize[size] : FontSize.p1)};
  ${({ weight }) => (weight ? FontWeight[weight] : FontWeight.medium)};
  color: ${({ color }) => (!!color ? color : Color.angelsGray9)};
  letter-spacing: ${({ size }) => (size && size.includes('angels') ? '0' : '-0.04em')};
`;

export default TypographyWrapper;
