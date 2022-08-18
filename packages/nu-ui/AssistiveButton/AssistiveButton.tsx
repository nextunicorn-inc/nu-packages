import React from 'react';
import { IconBox } from '../IconBox';
import { Loading } from '../Loading';
import * as Styled from './AssistiveButton.styled';
import { AssistiveButtonProps } from './AssistiveButton.types';

export const AssistiveButton = React.forwardRef<HTMLButtonElement, AssistiveButtonProps>(
  (
    {
      text = '',
      buttonColor = 'blue',
      icon,
      isIconAfter = false,
      disabled = false,
      loading = false,
      ...rest
    },
    ref,
  ) => (
    <Styled.DSAssistiveButtonWrapper
      {...rest}
      ref={ref}
      $color={buttonColor}
      disabled={disabled || loading}
      $disabled={disabled || loading}
    >
      {loading ? (
        <Loading />
      ) : (
        <IconBox text={text} isIconAfter={isIconAfter} icon={icon} size="large" />
      )}
    </Styled.DSAssistiveButtonWrapper>
  ),
);

export default AssistiveButton;
