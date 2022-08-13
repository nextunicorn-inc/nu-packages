import React from 'react';
import * as Styled from './Textarea.styled';
import { CharLimit } from '../CharLimit';
import { Asterisk } from '../../Asterisk';
import { HelperText } from '../../HelperText';

import type { TextareaProps } from './Textarea.types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      width = '100%',
      label = '',
      description = '',
      placeholder = '',
      helperText = '',
      errorText = '',
      charLimit = 0,
      mustInput = false,
      hasScrollBar = true,
      isError = false,
      defaultValue = '',
      disabled = false,
      onBlur,
      onChange,
      onFocus,
      ...rest
    },
    ref,
  ) => {
    const [, setFocus] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(defaultValue);

    const length = inputValue.length || 0;
    const hasError = isError || !!(charLimit && length > charLimit);
    const hasFooterText = helperText || hasError;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(event.target.value);
      if (!disabled && typeof onChange === 'function') onChange(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        if (typeof onFocus === 'function') onFocus(event);
        setFocus(true);
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        if (typeof onBlur === 'function') onBlur(event);
        setFocus(false);
      }
    };

    return (
      <Styled.DSTextareaWrapper $width={width}>
        {(label || charLimit || description) && (
          <>
            <Styled.LabelWrapper $noLabel={!label}>
              {label && (
                <Styled.Label>
                  {label}
                  {mustInput && <Asterisk />}
                </Styled.Label>
              )}
              {charLimit !== 0 && (
                <CharLimit noLabel={!label} length={length} charLimit={charLimit} />
              )}
            </Styled.LabelWrapper>
            {description && <Styled.Description>{description}</Styled.Description>}
          </>
        )}
        <Styled.TextareaBorder
          $isError={hasError}
          $isExistsValue={!!inputValue}
          $disabled={disabled}
        >
          <Styled.Textarea
            ref={ref}
            value={inputValue}
            placeholder={placeholder}
            $isError={hasError}
            $hasScrollBar={hasScrollBar}
            $disabled={disabled}
            readOnly={disabled}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        </Styled.TextareaBorder>
        {hasFooterText && (
          <HelperText color={hasError ? 'error' : 'gray'} style={{ marginLeft: '12px' }}>
            {hasError ? errorText : helperText}
          </HelperText>
        )}
      </Styled.DSTextareaWrapper>
    );
  },
);

export default Textarea;
