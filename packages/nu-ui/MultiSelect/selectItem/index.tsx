/**
 * This component represents an individual item in the multi-select drop-down
 */
import React, { useRef } from 'react';

import * as Styled from '../MultiSelect.styled';
import { KEY } from '../MultiSelect.constants';
import { Option } from '../MultiSelect.types';
import DefaultItemRenderer from '../defaultItem';
import { useKey } from '../../@hooks';

interface ISelectItemProps {
  itemRenderer;
  option: Option;
  checked?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  onSelectionChanged: (checked: boolean) => void;
  onClick;
  isCheckboxShowing?: boolean;
}

const SelectItem = ({
  itemRenderer: ItemRenderer = DefaultItemRenderer,
  option,
  checked,
  tabIndex,
  disabled,
  onSelectionChanged,
  onClick,
  isCheckboxShowing,
}: ISelectItemProps) => {
  const itemRef: any = useRef();

  const onOptionCheck = (e) => {
    toggleChecked();
    e.preventDefault();
  };

  const toggleChecked = () => {
    if (!disabled) {
      onSelectionChanged(!checked);
    }
  };

  const handleClick = (e) => {
    toggleChecked();
    onClick(e);
  };

  useKey([KEY.ENTER, KEY.SPACE], onOptionCheck, { target: itemRef });

  return (
    <Styled.SelectItemWrapper
      $selected={!!checked}
      role="option"
      aria-selected={checked}
      tabIndex={tabIndex}
      ref={itemRef}
    >
      <ItemRenderer
        option={option}
        checked={checked}
        onClick={handleClick}
        disabled={disabled}
        isCheckboxShowing={isCheckboxShowing}
      />
    </Styled.SelectItemWrapper>
  );
};

export default SelectItem;
