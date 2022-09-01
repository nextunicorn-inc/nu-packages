import { FocusEvent, MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import * as Styled from './Toggle.styled';
import { Check, UnCheck } from './Toggle.icons';
import ToggleProps from './Toggle.types';

const isTouchEvent = (target): target is TouchEvent => target.hasOwnProperty('changedTouches');

const pointerCoord = (event: TouchEvent | MouseEvent) => {
  if (isTouchEvent(event)) {
    const changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
  } else {
    const pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
};

const Toggle = ({ className, checked, defaultChecked, disabled, ...restProps }: ToggleProps) => {
  let previouslyChecked = !!(checked || defaultChecked);

  const [checkedState, setCheckedState] = useState<boolean>(previouslyChecked);
  const [hasFocus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkedState !== checked) setCheckedState(!!checked);
  });

  const handleClick = (event: MouseEvent) => {
    if (disabled) return;

    const checkbox = inputRef.current;
    if (event.target !== checkbox) {
      previouslyChecked = checkbox.checked;
      event.preventDefault();
      checkbox.focus();
      checkbox.checked = true;
      return;
    }

    setCheckedState(checked || checkbox.checked);
  };

  const classes = classNames(
    'nu',
    {
      checked: checkedState,
      focus: hasFocus,
      disabled: disabled,
    },
    className,
  );

  console.log(classes);

  return (
    <Styled.ToggleWrapper className={classes} onClick={handleClick}>
      <Styled.ToggleArea className="track">
        <Styled.ToggleAreaCheck className="track-check">
          <Check />
        </Styled.ToggleAreaCheck>
        <Styled.ToggleAreaUnCheck className="track-x">
          <UnCheck />
        </Styled.ToggleAreaUnCheck>
      </Styled.ToggleArea>
      <Styled.ToggleThumb className="thumb" />
      <Styled.ToggleInput
        {...restProps}
        ref={inputRef}
        className="screenreader-only"
        type="checkbox"
      />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
