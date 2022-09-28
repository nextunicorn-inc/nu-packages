/**
 * This component represents an unadorned list of SelectItem (s).
 */
import React from 'react';

import { useMultiSelect } from '../MultiSelect.hooks';
import { Option } from '../MultiSelect.types';
import SelectItem from '../selectItem';

interface ISelectListProps {
  options: Option[];
  onClick;
  skipIndex: number;
  isCheckboxShowing?: boolean;
  closeOnChangedValue?: boolean;
}

const SelectList = ({
  options,
  onClick,
  skipIndex,
  isCheckboxShowing,
  closeOnChangedValue,
}: ISelectListProps) => {
  const { disabled, value, onChange, ItemRenderer } = useMultiSelect();

  const handleSelectionChanged = (option: Option, checked: boolean) => {
    if (disabled) return;

    if (!isCheckboxShowing && closeOnChangedValue) {
      return onChange([option]);
    }
    onChange(checked ? [...value, option] : value.filter((o: any) => o.value !== option.value));
  };

  return (
    <>
      {options.map((o: any, i) => {
        const tabIndex = i + skipIndex;

        return (
          <li key={o?.key || i}>
            <SelectItem
              tabIndex={tabIndex}
              option={o}
              onSelectionChanged={(c) => handleSelectionChanged(o, c)}
              checked={!!value.find((s) => s.value === o.value)}
              onClick={(e) => onClick(e, tabIndex)}
              itemRenderer={ItemRenderer}
              disabled={o.disabled || disabled}
              isCheckboxShowing={isCheckboxShowing}
            />
          </li>
        );
      })}
    </>
  );
};

export default SelectList;
