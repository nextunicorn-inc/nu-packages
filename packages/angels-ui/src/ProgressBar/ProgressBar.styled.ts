import styled from '@emotion/styled';

import { css } from '@emotion/react';
import Palette from '../Palette';
import Font from '../Font';

export const Wrapper = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Palette.ShineBlue10};
  padding: 26px;
  gap: 3px;
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
`;
export const CheckBoxCircle = styled.div<{ $color?: string; $backgroundColor?: string }>`
  position: absolute;
  width: 14px;
  height: 14px;
  ${({ $color }) =>
    $color ? `border: 1px solid ${$color}` : `border: 1px solid ${Palette.ShineBlue70}`};
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${Palette.ShineBlue70};
    `};
  border-radius: 11px;
  left: 0;
  top: 0;
`;

export const CheckBoxStem = styled.div<{ $backgroundColor?: string }>`
  position: absolute;
  width: 1px;
  height: 6px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Palette.ShineBlue70};
  left: 7px;
  border: 1px;
  top: 3px;
`;
export const CheckBoxKick = styled.div<{ $backgroundColor?: string }>`
  position: absolute;
  width: 4px;
  height: 1px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Palette.ShineBlue70};
  left: 4px;
  top: 8.5px;
`;
export const BottomStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusText = styled.div<{ $isCurrentState: boolean; $isCompleted: boolean }>`
  color: ${({ $isCompleted }) => ($isCompleted ? Palette.Gray70 : Palette.Gray45)};
  ${Font.p3};
  margin-left: 8px;
  ${({ $isCurrentState }) =>
    $isCurrentState &&
    css`
      ${Font.semibold}
    `};
`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 28px;
  width: 100%;
  justify-content: space-between;
`;
export const ProgressBar = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  height: 2px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : Palette.ShineBlue70};
`;
