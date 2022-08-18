import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Color } from '../@foundations';

export const DSChipWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseButtonWrapper = styled.button`
  margin-left: 4px;
  margin-right: 12px;
`;

export const Text = styled.span<{ $closeable: boolean }>`
  font-size: 12px;
  line-height: 18px;
  color: ${Color.blueGray6};
  ${({ $closeable }) =>
    !$closeable &&
    css`
      margin-right: 8px;
    `}
`;
