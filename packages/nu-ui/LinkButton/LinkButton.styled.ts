import styled from '@emotion/styled';
import { Color } from '../@foundations';

const sizeCSS = {
  large: `
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  small: `
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
};

export const DSLinkButtonWrapper = styled.a<{
  $size: 'large' | 'small';
}>`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  white-space: pre;
  color: ${Color.unicornBlue6};
  padding: 2px;
  ${({ $size }) => sizeCSS[$size]};

  &:hover { 
    color: ${Color.unicornBlue7};
    text-decoration: underline;
    cursor: pointer;
  }
`;
