import styled from '@emotion/styled';
import { Color } from '../@foundations';

const sizeCSS = {
  large: `
    padding: 10px 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  small: `
    padding: 8px 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
};

export const DSTextButtonWrapper = styled.button<{
  $size: 'large' | 'small';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  white-space: pre;
  color: ${Color.naturalGray7};
  ${({ $size }) => sizeCSS[$size]};

  &:hover {
    background-color: ${Color.blueGray0};
  }
`;
