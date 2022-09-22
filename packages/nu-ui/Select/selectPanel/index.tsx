/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NoOptionsItem, SelectItemWrapper } from '../Select.styled';

import * as Styled from '../Select.styled';
import { useMultiSelect } from '../Select.hooks';
import { KEY } from '../Select.constants';
import { simpleFilterOptions } from '../Select.utils';
import { CrossIcon } from '../Select.icons';
import SelectItem from '../selectItem';
import SelectList from '../selectList';
import { useKey } from '../../@hooks';
import { debounce } from '../../@utils';

enum FocusType {
  SEARCH = 0,
  NONE = -1,
}

const SelectPanel = () => {
  const {
    t,
    onChange,
    options,
    setOptions,
    value,
    filterOptions: customFilterOptions,
    ItemRenderer,
    disabled,
    disableSearch,
    hasSelectAll,
    ClearIcon,
    debounceDuration,
    isCreatable,
    onCreateOption,
  } = useMultiSelect();

  const listRef = useRef<any>();
  const searchInputRef = useRef<any>();
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [searchTextForFilter, setSearchTextForFilter] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);
  const debouncedSearch = useCallback(
    debounce((query) => setSearchTextForFilter(query), debounceDuration),
    [],
  );

  const skipIndex = useMemo(() => {
    let start = 0;

    if (!disableSearch) start += 1; // if search is enabled then +1 to skipIndex
    if (hasSelectAll) start += 1; // if select-all is enabled then +1 to skipIndex

    return start;
  }, [disableSearch, hasSelectAll]);

  const selectAllOption = {
    label: searchText ? t('selectAllFiltered') : t('selectAll'),
    value: '',
  };

  const selectAllValues = (checked) => {
    const filteredValues = filteredOptions.filter((o) => !o.disabled).map((o) => o.value);

    if (checked) {
      const selectedValues = value.map((o) => o.value);
      const finalSelectedValues = [...selectedValues, ...filteredValues];

      return (customFilterOptions ? filteredOptions : options).filter((o) =>
        finalSelectedValues.includes(o.value),
      );
    }

    return value.filter((o) => !filteredValues.includes(o.value));
  };

  const selectAllChanged = (checked: boolean) => {
    const newOptions = selectAllValues(checked);
    onChange(newOptions);
  };

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  const handleClear = () => {
    setSearchTextForFilter('');
    setSearchText('');
    searchInputRef?.current?.focus();
  };

  const handleItemClicked = (index: number) => setFocusIndex(index);

  // Arrow Key Navigation
  const handleKeyDown = (e) => {
    switch (e.code) {
      case KEY.ARROW_UP:
        updateFocus(-1);
        break;
      case KEY.ARROW_DOWN:
        updateFocus(1);
        break;
      default:
        return;
    }
    e.stopPropagation();
    e.preventDefault();
  };

  useKey([KEY.ARROW_DOWN, KEY.ARROW_UP], handleKeyDown, {
    target: listRef,
  });

  const handleSearchFocus = () => {
    setFocusIndex(FocusType.SEARCH);
  };

  const handleOnCreateOption = async () => {
    let newOption = { label: searchText, value: searchText, __isNew__: true };

    // if custom `onCreateOption` is given then this will call this
    if (onCreateOption) {
      newOption = await onCreateOption(searchText);
    }

    // adds created value to existing options
    setOptions([newOption, ...options]);
    handleClear();

    onChange([...value, newOption]);
  };

  const getFilteredOptions = async () =>
    customFilterOptions
      ? await customFilterOptions(options, searchTextForFilter)
      : simpleFilterOptions(options, searchTextForFilter);

  const updateFocus = (offset: number) => {
    let newFocus = focusIndex + offset;
    newFocus = Math.max(0, newFocus);
    newFocus = Math.min(newFocus, options.length + Math.max(skipIndex - 1, 0));
    setFocusIndex(newFocus);
  };

  useEffect(() => {
    listRef?.current?.querySelector(`[tabIndex='${focusIndex}']`)?.focus();
  }, [focusIndex]);

  const [isAllOptionSelected, hasSelectableOptions] = useMemo(() => {
    const filteredOptionsList = filteredOptions.filter((o) => !o.disabled);
    return [
      filteredOptionsList.every((o) => value.findIndex((v) => v.value === o.value) !== -1),
      filteredOptionsList.length !== 0,
    ];
    // eslint-disable-next-line
  }, [filteredOptions, value]);

  useEffect(() => {
    getFilteredOptions().then(setFilteredOptions);
  }, [searchTextForFilter, options]);

  const creationRef: any = useRef();
  useKey([KEY.ENTER], handleOnCreateOption, { target: creationRef });

  const showCreatable =
    isCreatable && searchText && !filteredOptions.some((e) => e?.value === searchText);

  return (
    <Styled.SelectPanelWrapper role="listbox" ref={listRef}>
      {!disableSearch && (
        <Styled.SearchArea>
          <input
            placeholder={t('search')}
            type="text"
            aria-describedby={t('search')}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            value={searchText}
            ref={searchInputRef}
            tabIndex={0}
          />
          <button
            type="button"
            hidden={!searchText}
            onClick={handleClear}
            aria-label={t('clearSearch')}
          >
            {ClearIcon || <CrossIcon />}
          </button>
        </Styled.SearchArea>
      )}

      <Styled.OptionsArea>
        {hasSelectAll && hasSelectableOptions && (
          <SelectItem
            tabIndex={skipIndex === 1 ? 0 : 1}
            checked={isAllOptionSelected}
            option={selectAllOption}
            onSelectionChanged={selectAllChanged}
            onClick={() => handleItemClicked(1)}
            itemRenderer={ItemRenderer}
            disabled={disabled}
          />
        )}

        {filteredOptions.length ? (
          <SelectList
            skipIndex={skipIndex}
            options={filteredOptions}
            onClick={(_e, index) => handleItemClicked(index)}
          />
        ) : showCreatable ? (
          <Styled.SelectItemWrapper onClick={handleOnCreateOption} tabIndex={1} ref={creationRef}>
            {`${t('create')} "${searchText}"`}
          </Styled.SelectItemWrapper>
        ) : (
          <Styled.NoOptionsItem>{t('noOptions')}</Styled.NoOptionsItem>
        )}
      </Styled.OptionsArea>
    </Styled.SelectPanelWrapper>
  );
};

export default SelectPanel;
