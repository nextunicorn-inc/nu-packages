import styled from '@emotion/styled';
import { Color } from '../@foundations';

export const DSDropdownWrapper = styled.div<{ $width: string; $isOpen: boolean; $isTop: boolean }>`
  position: relative;
  min-width: 100px;
  ${({ $width }) => $width && `width: ${$width}`};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  user-select: none;
  border: 1px solid ${Color.blueGray2};
  border-radius: ${({ $isOpen, $isTop }) =>
    $isOpen && $isTop ? '0 0 5px 5px' : $isOpen && !$isTop ? '5px 5px 0 0' : '5px'};

  button {
    width: 100%;
    overflow: visible;
    margin: inherit;
    border: none;
    padding: 10px 12px;
    background: inherit;
    font: inherit;
    line-height: normal;
    color: inherit;
    text-align: inherit;
    -webkit-appearance: none;
    display: flex;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 2em;

  div {
    display: flex;
  }

  svg {
    user-select: none;
    pointer-events: none;
  }
`;

export const DropdownTitle = styled.div``;

export const DropdownScrollList = styled.div`
  height: 100%;
`;

export const DropdownList = styled.div<{ $isTop: boolean }>`
  position: absolute;
  left: -1px;
  ${({ $isTop }) => $isTop && 'bottom: 40px'};
  z-index: 10;
  width: calc(100% + 2px);
  padding: 0 1px;
  border: 1px solid ${Color.blueGray2};
  ${({ $isTop }) =>
    $isTop
      ? `border-bottom: none;
        border-radius: 5px 5px 0 0;`
      : `border-top: none;
        border-radius: 0 0 5px 5px;`};
  background-color: white;
  text-align: left;
  -webkit-overflow-scrolling: touch;

  &.searchable {
    overflow-y: hidden;
    padding: 0;
  }

  ${DropdownScrollList} {
    //padding: 10px 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    ${({ $isTop }) => ($isTop ? 'bottom: 0;' : 'top: 0;')};
    width: calc(100% - 24px);
    border-top: 1px solid ${Color.blueGray2};
    height: 1px;
    border-radius: 1px;
  }
`;

export const DropdownListItem = styled.button<{ $isSelected: boolean }>`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  ${({ $isSelected }) => $isSelected && `color: ${Color.unicornBlue6} !important`};

  &.no-result {
    font-weight: normal;
    cursor: default;

    &:hover {
      background-color: transparent;
      color: black;
    }
  }

  &:hover {
    & > span > svg > path {
      fill: white;
    }
  }
`;

export const DropdownListSearchBar = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-bottom: 1px solid #dfdfdf;
  font-size: inherit;

  &::placeholder {
    color: rgb(200, 200, 200);
  }
`;
