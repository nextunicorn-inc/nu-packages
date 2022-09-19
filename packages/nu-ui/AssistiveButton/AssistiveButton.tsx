import React from 'react';
import { ButtonVariant } from '../Button/Button.types';
import { IconBox } from '../IconBox';
import { Loading } from '../Loading';
import * as Styled from './AssistiveButton.styled';
import { AssistiveButtonProps } from './AssistiveButton.types';

const loadingKind = {
  blue: 'primary',
  gray: 'tertiary',
  coral: 'secondary',
};

export const AssistiveButton = React.forwardRef<HTMLButtonElement, AssistiveButtonProps>(
  (
    {
      text = '',
      buttonColor = 'blue',
      icon,
      isIconAfter = false,
      disabled = false,
      loading = false,
      children,
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
        <Loading kind={loadingKind[buttonColor] as ButtonVariant} />
      ) : (
        <IconBox
          text={text || (children as string)}
          isIconAfter={isIconAfter}
          icon={icon}
          size="large"
        />
      )}
    </Styled.DSAssistiveButtonWrapper>
  ),
);

export default AssistiveButton;
