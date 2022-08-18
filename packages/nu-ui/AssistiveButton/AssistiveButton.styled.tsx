import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from '../@foundations';
import { AssistiveButtonColor } from './AssistiveButton.types';

const colorCss = {
  blue: css`
    color: ${Color.unicornBlue6};
    background-color: ${Color.unicornBlue0};

    &:disabled {
      color: ${Color.unicornBlue3};
    }

    &:hover:not(:disabled) {
      background-color: ${Color.unicornBlue1};
    }
  `,
  coral: css`
    color: ${Color.coral4};
    background-color: ${Color.coral0};

    &:disabled {
      opacity: 0.4;
    }

    &:hover:not(:disabled) {
      background-color: ${Color.coral1};
    }
  `,
  gray: css`
    color: ${Color.naturalGray7};
    background-color: ${Color.blueGray0};

    &:disabled {
      opacity: 0.4;
    }

    &:hover:not(:disabled) {
      background-color: ${Color.blueGray1};
    }
  `,
};

export const DSAssistiveButtonWrapper = styled.button<{
  $color: AssistiveButtonColor;
  $disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 5px;
  ${({ $color }) => colorCss[$color]};
  transition: all 0.2s ease-in-out;
  white-space: pre;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
