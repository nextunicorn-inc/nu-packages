import styled from '@emotion/styled';
import { Color, FontSize, FontWeight, Keyframe } from '../@foundations';

export const DefaultItemRendererWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    display: none;
  }

  ${({ $disabled }) => $disabled && 'opacity: 0.5;'};

  svg {
    transition: 0.3s ease-in-out;
  }
`;

export const DropdownHeaderWrapper = styled.span<{ $none?: boolean }>`
  min-width: 270px;

  ${FontSize.p2};
  ${FontWeight.regular};
  color: ${({ $none }) => ($none ? Color.angelsGray4 : Color.angelsGray8)};
`;

export const SelectItemWrapper = styled.label<{ $selected?: boolean }>`
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  outline-offset: -1px;
  outline-color: red;
  border-radius: 2px;

  &:hover {
    background-color: ${Color.angelsGray1};
  }
`;

export const SelectPanelWrapper = styled.div``;

export const SearchArea = styled.div`
  width: 100%;
  position: relative;

  border-bottom: 1px solid #ccc;

  input {
    background: none;
    min-height: 48px;
    padding: 0 10px;
    width: 100%;
    outline: 0;
    border: 0;
    ${FontSize.p2};
    ${FontWeight.regular};
    color: ${Color.angelsGray8};

    &:focus {
      background: #f1f3f5;
    }
  }

  & > button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: none;
    border: 0;
    padding: 0 calc(10px / 2);

    [hidden] {
      display: none;
    }
  }
`;

export const OptionsArea = styled.ul`
  max-height: 260px;
  overflow-y: auto;
  margin: 10px 6px;
  padding-left: 0;

  li {
    list-style: none;
    margin: 0;
  }
`;

export const NoOptionsItem = styled.li`
  padding: 10px;
  text-align: center;
  color: ${Color.angelsGray1};
`;

export const DSSelectWrapper = styled.div`
  position: relative;
  width: 320px;

  outline: 0;
  background-color: ${Color.angelsGray0};
  border: 1px solid ${Color.angelsGray2};
  border-radius: 2px;

  [aria-disabled='true']:focus-within {
    border-color: ${Color.angelsGray2};
  }

  &:focus-within {
    border-color: ${Color.angelsGray9};
  }
`;

export const SelectHeadArea = styled.div`
  position: relative;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  min-width: 320px;
  min-height: 48px;
  cursor: default;
  outline: 0;
  border-right: 2px;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

  & > button {
    display: flex;
    cursor: pointer;
    background: none;
    border: 0;
    padding: 0;
  }
`;

export const SelectContent = styled.div<{ $direction: 'top' | 'bottom' }>`
  position: absolute;
  z-index: 1;
  width: 100%;

  ${({ $direction }) =>
    $direction === 'bottom'
      ? `
          top: 100%;
          padding-top: 8px;
  `
      : `
          bottom: 100%;
          padding-bottom: 8px;
  `};
`;

export const PanelContent = styled.div`
  overflow: hidden;
  border-radius: 2px;
  background-color: ${Color.angelsGray0};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);
`;

export const SVG = styled.svg`
  animation: ${Keyframe['rotate']} 2s linear infinite;

  circle {
    stroke: #ccc;
    stroke-width: 4px;
    stroke-linecap: round;
    animation: ${Keyframe['dash']} 1.5s ease-in-out infinite;
  }
`;
