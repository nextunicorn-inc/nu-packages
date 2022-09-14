import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../@foundations';

import type TypoProps from './Typography.types';

export const TypographyWrapper = styled.span<TypoProps>`
  ${({ size }) => (size ? FontSize[size] : FontSize.p1)};
  font-weight: ${({ weight }) => weight && FontWeight[weight]};
  ${({ color }) => color && `color: ${color}`};
  letter-spacing: ${({ size }) => (size && size.includes('angels') ? '0' : '-0.04em')};
`;

export default TypographyWrapper;
