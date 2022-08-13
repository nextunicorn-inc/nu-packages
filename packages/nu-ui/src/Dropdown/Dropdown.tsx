import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import * as Styled from './Dropdown.styled';
import * as Icon from './Dropdown.icon';
import { DropdownProps, ItemProps } from './Dropdown.types';

const DropDownList = ({
  id,
  isTop,
  searchable,
  itemSelect,
  list,
  selectedItem,
  keyword,
}: {
  id: string;
  isTop: boolean;
  searchable: [string, string];
  itemSelect: ({ value, label }: ItemProps) => void;
  list: ItemProps[];
  selectedItem: ItemProps;
  keyword: string;
}) => {
  let tempList = [...list];

  if (keyword.length) {
    tempList = list.filter((item) => item.label.toLowerCase().includes(keyword.toLowerCase()));
  }

  if (tempList.length) {
    const listITem = isTop ? tempList.slice().reverse() : tempList;
    return (
      <>
        {listITem.map((item) => (
          <Styled.DropdownListItem
            type="button"
            key={item.value}
            onClick={() => itemSelect(item)}
            $isSelected={item.value === selectedItem.value}
          >
            {item.label}
          </Styled.DropdownListItem>
        ))}
      </>
    );
  }

  if (searchable) {
    return <div className={`dd-list-item no-result ${id}`}>{searchable[1]}</div>;
  }

  return <></>;
};

const Dropdown = ({
  id = 'nu-dropdown',
  name = 'nu-dropdown',
  width = '100%',
  onChange = (e) => console.log(e),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClickOpen = () => {},
  title = '선택해주세요',
  list = [],
  searchable,
  selected = { value: '', label: '' },
  isTop = false,
  arrowUpIcon,
  arrowDownIcon,
}: DropdownProps) => {
  const [isListOpen, setListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps>(selected);
  const [keyword, setKeyword] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const searchFieldRef = useRef<HTMLInputElement>(null);

  const close = () => setListOpen(false);

  const handleClick = useCallback((e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as HTMLElement)) {
      close();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const itemSelect = ({ value, label }: ItemProps) => {
    setSelectedItem({ value, label });
    setListOpen(false);

    if (selectedItem.value !== value) onChange({ value, label }, name);
  };

  const toggleList = () => {
    if (!isListOpen) {
      onClickOpen();
    }
    setListOpen(!isListOpen);
    setKeyword('');
  };

  const filterList = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.toLowerCase());
  };

  return (
    <Styled.DSDropdownWrapper
      ref={dropdownRef}
      onClick={toggleList}
      $width={width}
      $isOpen={isListOpen}
      $isTop={isTop}
    >
      <Styled.DropdownButton type="button">
        <Styled.DropdownTitle>{selectedItem.label || title}</Styled.DropdownTitle>
        {isTop ? (
          <div>{arrowUpIcon || <Icon.UpArrow />}</div>
        ) : (
          <div>{arrowDownIcon || <Icon.DownArrow />}</div>
        )}
      </Styled.DropdownButton>
      {isListOpen && (
        <Styled.DropdownList $isTop={isTop}>
          {searchable && (
            <Styled.DropdownListSearchBar
              // ref={searchFieldRef}
              placeholder={searchable[0]}
              onClick={(e) => e.stopPropagation()}
              onChange={filterList}
            />
          )}
          <Styled.DropdownScrollList>
            <DropDownList
              id={id}
              isTop={isTop}
              itemSelect={itemSelect}
              searchable={searchable as [string, string]}
              selectedItem={selectedItem}
              list={list}
              keyword={keyword}
            />
          </Styled.DropdownScrollList>
        </Styled.DropdownList>
      )}
    </Styled.DSDropdownWrapper>
  );
};

export default Dropdown;
