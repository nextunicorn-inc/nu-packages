import React from 'react';
import { CharLimit } from '../CharLimit';
import { Icon24Search } from './Input.icons';
import { Icon20Alert } from '../Icon';
import * as Styled from './Input.styled';
import { Asterisk } from '../../Asterisk';
import { HelperText } from '../../HelperText';

import type { InputProps } from './Input.types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      defaultValue = '',
      type = 'text',
      width = '100%',
      inputSize = 'large',
      label,
      description,
      innerLabel,
      placeholder,
      unitText,
      helperText,
      errorText,
      charLimit,
      textAlignRight = false,
      mustInput = false,
      isError = false,
      disabled = false,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      disableEnterSubmit = false,
      isSearch,
      prefixIcon,
      suffixIcon,
      style,
      autoComplete,
      ...rest
    },
    ref,
  ) => {
    const [, setFocus] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(defaultValue);

    const length = inputValue.length || 0;
    const hasError = isError || !!(charLimit && length > charLimit);
    const hasFooterText = helperText || isError;
    const showInnerLabel = innerLabel;
    const showSearchIcon = isSearch && !isError;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      if (!disabled && typeof onChange === 'function') {
        onChange(event);
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
      if (!disabled && typeof onClick === 'function') {
        onClick(event);
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled && typeof onFocus === 'function') {
        onFocus(event);
        setFocus(true);
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled && typeof onBlur === 'function') {
        onBlur(event);
        setFocus(false);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (disableEnterSubmit) {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      }
      if (!disabled && typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!disabled && typeof onKeyUp === 'function') {
        onKeyUp(event);
      }
    };

    return (
      <Styled.DSInputWrapper style={style} $width={width}>
        {(label || charLimit || description) && (
          <>
            <Styled.LabelWrapper $noLabel={!label}>
              {label && (
                <Styled.Label>
                  {label}
                  {mustInput && <Asterisk />}
                </Styled.Label>
              )}
              {charLimit && <CharLimit noLabel={!label} length={length} charLimit={charLimit} />}
            </Styled.LabelWrapper>
            {description && <Styled.Description>{description}</Styled.Description>}
          </>
        )}
        <Styled.InputBorder
          $isError={hasError}
          $isExistsValue={!!inputValue}
          $disabled={disabled}
          $inputSize={inputSize}
          $isSearch={!!isSearch}
        >
          {prefixIcon && <Styled.IconWrapper isIconOnly icon={prefixIcon} />}
          <Styled.InputContents>
            {showInnerLabel && <Styled.InnerLabel>{innerLabel}</Styled.InnerLabel>}
            <Styled.Input
              {...rest}
              ref={ref}
              value={value ?? inputValue}
              type={type}
              placeholder={placeholder}
              readOnly={disabled}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              autoComplete={autoComplete}
              $disabled={disabled}
              $textAlignRight={textAlignRight}
            />
          </Styled.InputContents>
          {unitText && <Styled.UnitText>{unitText}</Styled.UnitText>}
          <span aria-hidden="true" onClick={handleClick}>
            {showSearchIcon && <Icon24Search />}
            {hasError && <Icon20Alert />}
            {!showSearchIcon && !hasError && <Styled.IconWrapper isIconOnly icon={suffixIcon} />}
          </span>
        </Styled.InputBorder>
        {hasFooterText && (
          <HelperText color={hasError ? 'error' : 'gray'}>
            {hasError ? errorText : helperText}
          </HelperText>
        )}
      </Styled.DSInputWrapper>
    );
  },
);

export default Input;
