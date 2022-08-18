import { css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';
import { Color } from '../@foundations';

export interface CharLimitProps {
  noLabel: boolean;
  length: number;
  charLimit: number;
}

export const DSCharLimitWrapper = styled.div<{ $noLabel: boolean }>`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${Color.naturalGray7};
  display: flex;
  align-items: center;
  ${({ $noLabel }) =>
    $noLabel &&
    css`
      justify-content: flex-end;
    `}
`;

export const CharCount = styled.span<{ $error: boolean }>`
  color: ${({ $error }) => ($error ? Color.coral6 : Color.naturalGray7)};
`;

export const CharLimit = ({ noLabel, length = 0, charLimit }: CharLimitProps) => {
  const error = length > charLimit;

  return React.useMemo(
    () => (
      <DSCharLimitWrapper $noLabel={noLabel}>
        <CharCount $error={error}>{length}</CharCount>/{charLimit}자
      </DSCharLimitWrapper>
    ),
    [length, charLimit, error],
  );
};
