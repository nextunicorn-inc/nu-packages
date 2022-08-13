import styled from '@emotion/styled';
import { Theme } from '../@foundations';
import { Color } from './HelperText.types';

export const DSHelperTextWrapper = styled.span<{ $color: Color }>`
  margin-top: 4px;
  margin-left: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ $color }) => Theme.HelperTextColor[$color]};
`;
