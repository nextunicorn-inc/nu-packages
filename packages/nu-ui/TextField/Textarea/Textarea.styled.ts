import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from '../../@foundations';
import { ThinScrollBar } from '../../@styles';

export const TextareaBorder = styled.div<{
  $isError: boolean;
  $isExistsValue: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${Color.naturalGray3};
  border-radius: 5px;
  ${({ $isExistsValue }) => $isExistsValue && `border: 1px solid ${Color.blueGray6}`};
  ${({ $isError }) => $isError && `border: 1px solid ${Color.coral6}`};
  ${({ $disabled }) => $disabled && 'cursor: not-allowed;'};

  &:focus-within {
    border: 1px solid ${Color.unicornBlue6};
  }

  :not(div:first-of-type) {
    margin-top: 8px;
  }
`;

export const Textarea = styled.textarea<{
  $isError: boolean;
  $disabled: boolean;
  $hasScrollBar: boolean;
}>`
  width: 100%;
  height: 168px;
  padding: 10px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  ${ThinScrollBar};
  ${({ $isError }) =>
    $isError &&
    css`
      color: ${Color.coral6} !important;
      -webkit-text-fill-color: ${Color.coral6} !important;
    `};
  ${({ $disabled }) => $disabled && 'cursor: not-allowed'};
  ${({ $hasScrollBar }) => !$hasScrollBar && 'overflow: hidden;'};
  ${({ $disabled }) => css`
    background-color: ${Color.naturalGray0};
    color: ${$disabled ? Color.blueGray6 : Color.naturalGray7};
    -webkit-text-fill-color: ${$disabled ? Color.blueGray6 : Color.naturalGray7};
    &::placeholder {
      color: ${Color.naturalGray4} !important;
      -webkit-text-fill-color: ${Color.naturalGray4};
    }
  `}
`;

export const DSTextareaWrapper = styled.div<{ $width: string }>`
  min-width: 320px;
  width: ${({ $width }) => $width};
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.div<{ $noLabel: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ $noLabel }) => ($noLabel ? 'flex-end' : 'space-between')};
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Color.naturalGray8};
`;

export const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${Color.naturalGray7};
`;

export const AsteriskWrapper = styled.span`
  color: ${Color.coral6};
`;
