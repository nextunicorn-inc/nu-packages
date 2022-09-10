import styled from '@emotion/styled';
import { BasicTransition, Color, Keyframe } from '../@foundations';
import { size14 } from '../Typography/FontSchema/FontSize';

export const DropdownWrapper = styled.nav``;

export const DropdownMenus = styled.ul`
  display: flex;

  list-style: none;
`;

export const DropdownMenuButton = styled.button`
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;

  font-weight: 700;
  ${size14}

  &:hover {
    background-color: ${Color.angelsGray1};
  }
`;
export const DropdownMenuTitle = styled.span`
  width: 100%;
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

export const DropdownMenuItemWrapper = styled.li`
  width: 142px;
  height: 40px;

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
