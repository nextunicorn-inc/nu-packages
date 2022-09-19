import styled from '@emotion/styled';
import { Color, FontSize, FontWeight } from '../@foundations';

export const DividerOnly = styled.hr`
  border: 0.5px solid ${Color.angelsGray3};
`;

export const DividerWithChildren = styled.div`
  display: flex;
  align-items: center;

  ${FontWeight.regular};
  ${FontSize.p4};
  color: ${Color.angelsGray3};
  text-transform: uppercase;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: ${Color.angelsGray3};
    flex-grow: 1;
  }

  &::before {
    margin-right: 3px;
  }

  &::after {
    margin-left: 3px;
  }
`;
