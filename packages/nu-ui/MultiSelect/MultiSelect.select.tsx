import { useEffect, useRef, useState } from 'react';
import SelectPanel from './selectPanel';
import { DropdownHeader } from './header';
import { useMultiSelect } from './MultiSelect.hooks';
import * as Styled from './MultiSelect.styled';
import { KEY } from './MultiSelect.constants';
import { LoadingIcon, ArrowIcon, CrossIcon } from './MultiSelect.icons';
import { useDidUpdateEffect, useKey } from '../@hooks';

const MultiSelectSelect = () => {
  const {
    t,
    onMenuToggle,
    ArrowRenderer,
    shouldToggleOnHover,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    ClearSelectedIcon,
    closeOnChangedValue,
    direction = 'bottom',
    isError,
  } = useMultiSelect();

  useEffect(() => {
    if (closeOnChangedValue) setExpanded(false);
  }, [value]);

  const [isInternalExpand, setIsInternalExpand] = useState(true);
  const [expanded, setExpanded] = useState(defaultIsOpen);
  const [hasFocus, setHasFocus] = useState(false);
  const FinalArrow = ArrowRenderer || ArrowIcon;

  const wrapper: any = useRef();

  useDidUpdateEffect(() => {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);

  useEffect(() => {
    if (defaultIsOpen === undefined && typeof isOpen === 'boolean') {
      setIsInternalExpand(false);
      setExpanded(isOpen);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    // allows space and enter when focused on input/button
    if (['text', 'button'].includes(e.target.type) && [KEY.SPACE, KEY.ENTER].includes(e.code)) {
      return;
    }

    if (isInternalExpand) {
      if (e.code === KEY.ESCAPE) {
        setExpanded(false);
        wrapper?.current?.focus();
      } else {
        setExpanded(true);
      }
    }
    e.preventDefault();
  };

  useKey([KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE], handleKeyDown, {
    target: wrapper,
  });

  const handleHover = (isExpanded: boolean) => {
    isInternalExpand && shouldToggleOnHover && setExpanded(isExpanded);
  };

  const handleFocus = () => !hasFocus && setHasFocus(true);

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
      setExpanded(false);
    }
  };

  const handleMouseEnter = () => handleHover(true);

  const handleMouseLeave = () => handleHover(false);

  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };

  const handleClearSelected = (e) => {
    e.stopPropagation();
    onChange([]);
    isInternalExpand && setExpanded(false);
  };

  return (
    <Styled.DSSelectWrapper
      tabIndex={0}
      aria-labelledby={labelledBy}
      aria-expanded={expanded}
      aria-readonly={true}
      aria-disabled={disabled}
      ref={wrapper}
      $error={isError}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.SelectHeadArea onClick={toggleExpanded}>
        <DropdownHeader />
        {isLoading && <LoadingIcon />}
        {value.length > 0 && ClearSelectedIcon !== null && (
          <button
            type="button"
            onClick={handleClearSelected}
            disabled={disabled}
            aria-label={t('clearSelected')}
          >
            {ClearSelectedIcon || <CrossIcon />}
          </button>
        )}
        <Styled.SelectArrowWrapper $isOpen={expanded}>
          <FinalArrow />
        </Styled.SelectArrowWrapper>
      </Styled.SelectHeadArea>
      {expanded && (
        <Styled.SelectContent $direction={direction}>
          <Styled.PanelContent>
            <SelectPanel />
          </Styled.PanelContent>
        </Styled.SelectContent>
      )}
    </Styled.DSSelectWrapper>
  );
};

export default MultiSelectSelect;
