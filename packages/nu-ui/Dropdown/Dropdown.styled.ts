import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BasicTransition, Color, FontSize, FontWeight, Keyframe } from '../@foundations';
import { size14 } from '../@foundations';

export const DropdownWrapper = styled.nav`
  width: max-content;
`;

export const DropdownMenus = styled.ul`
  display: flex;

  list-style: none;
`;

export const DropdownMenuButton = styled.button`
  min-height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;

  ${FontSize['angels-p2']};
  color: ${Color.angelsGray8};

  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    ${FontWeight.bold};
    background-color: ${Color.angelsGray1};
  }
`;
export const DropdownMenuTitle = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
`;

export const DropdownArea = styled.li`
  position: relative;

  font-size: 14px;
`;

export const DropdownMenuItems = styled.ul`
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4px 0;
  height: fit-content;

  margin-top: 8px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 0.875rem;
  z-index: 10000;
  list-style: none;
  background-color: #fff;
  border-radius: 5px;

  animation: ${Keyframe['slideInUp']} ${BasicTransition};

  &.dropdown-submenu {
    position: absolute;
    left: 100%;
    top: -7px;
  }
`;

export const Divider = styled.span`
  width: 75%;
  height: 1px;

  border-bottom: 1px solid ${Color.angelsGray2};

  margin: 16px 0;
`;

export const DropdownMenuItemWrapper = styled.li<{ $hasChildren?: boolean }>`
  width: 142px;
  height: ${({ $hasChildren }) => ($hasChildren ? 'auto' : '40px')};

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  button {
    color: inherit;
    font-size: inherit;
    background-color: transparent;
  }

  a,
  button {
    width: 100%;
    text-align: left;
    padding: 10px 18px;
  }

  a:hover,
  button:hover {
    cursor: pointer;
    font-weight: 700;
    background-color: ${Color.angelsGray1};
  }
`;
