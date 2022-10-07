import { useEffect, useRef, useState } from 'react';
import * as Styled from './Dropdown.styled';
import { DropdownItemsProps, DropdownItemType, DropdownMenuProps } from './Dropdown.types';

const DropdownItems = ({ data, style, onChange, onClose }: DropdownItemsProps) => {
  const Component = data.href ? 'a' : 'button';
  const hrefProps = Component === 'a' && { href: data.href, target: data.target };
  const [isShownSubMenu, setToggleSubMenu] = useState(false);
  const ref = useRef<null | HTMLLIElement>(null);
  const handleClickEvent = {
    toggleSubMenu: (data: DropdownItemType) => (event: any) => {
      if (!data.submenu || (data.submenu && data.submenu.length === 0)) {
        onChange && onChange(event.target.textContent, data);
        onClose && onClose();
        data.onClick && data.onClick();
      }
      setToggleSubMenu(!isShownSubMenu);
    },
    selectMenu: (data: DropdownItemType) => (event: any) => {
      onChange && onChange(event.target.textContent, data);
      onClose && onClose();
    },
    closeSubMenu: (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleSubMenu(false);
      }
    },
  };
  useEffect(() => {
    document.addEventListener('click', handleClickEvent.closeSubMenu);
    return () => {
      document.removeEventListener('click', handleClickEvent.closeSubMenu);
    };
  }, []);
  return (
    <Styled.DropdownMenuItemWrapper style={style} ref={ref}>
      <Component
        {...hrefProps}
        type="button"
        aria-haspopup="menu"
        aria-expanded="false"
        onClick={handleClickEvent.toggleSubMenu(data)}
      >
        <span>{data.title}</span>
        {data.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            className="right-arrow"
          >
            <path
              d="M1.06348 1.04015L6.98625 5.95435L12.3167 1.04015"
              stroke="#616166"
              strokeWidth="2"
            ></path>
          </svg>
        )}
      </Component>
      {isShownSubMenu && data.submenu && data.submenu.length !== 0 && (
        <Styled.DropdownArea className="dropdown-submenu">
          {data.submenu.map((item, index) => {
            return (
              <Styled.DropdownMenuItems key={index.toString()}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  onClick={handleClickEvent.selectMenu(item)}
                >
                  <span>{item.title}</span>
                </button>
              </Styled.DropdownMenuItems>
            );
          })}
        </Styled.DropdownArea>
      )}
    </Styled.DropdownMenuItemWrapper>
  );
};

const DropdownMenu = ({
  selectedValue = '전체',
  data,
  cx,
  onChange,
  children,
}: DropdownMenuProps) => {
  const [isShownDropdown, setToggleDropdown] = useState(false);
  const ref = useRef<null | HTMLElement>(null);
  const handleClickEvent = {
    toggleDropdown: () => setToggleDropdown(!isShownDropdown),
    closeDropdown: (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    },
    closeDropdownAction: () => {
      setToggleDropdown(false);
    },
  };
  useEffect(() => {
    document.addEventListener('click', handleClickEvent.closeDropdown);
    return () => {
      document.removeEventListener('click', handleClickEvent.closeDropdown);
    };
  }, []);
  return (
    <Styled.DropdownWrapper ref={ref} css={cx}>
      <Styled.DropdownMenus>
        <Styled.DropdownArea>
          <Styled.DropdownMenuButton
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            onClick={handleClickEvent.toggleDropdown}
          >
            <Styled.DropdownMenuTitle>{selectedValue}</Styled.DropdownMenuTitle>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 6L8 10L4.5 6"
                stroke="#424242"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </Styled.DropdownMenuButton>
          {data && data.length !== 0 && isShownDropdown && (
            <Styled.DropdownMenuItems>
              {children && (
                <>
                  <Styled.DropdownMenuItemWrapper $hasChildren>
                    {children}
                  </Styled.DropdownMenuItemWrapper>
                  <Styled.Divider />
                </>
              )}
              {data.map((item, index) => {
                return (
                  <DropdownItems
                    data={item}
                    onChange={onChange}
                    onClose={handleClickEvent.closeDropdownAction}
                    key={index.toString()}
                    onClick={item.onClick}
                  />
                );
              })}
            </Styled.DropdownMenuItems>
          )}
        </Styled.DropdownArea>
      </Styled.DropdownMenus>
    </Styled.DropdownWrapper>
  );
};

export default DropdownMenu;
