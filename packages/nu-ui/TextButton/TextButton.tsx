import React from 'react';
import { IconBox } from '../IconBox';
import * as Styled from './TextButton.styled';
import { TextButtonProps } from './TextButton.types';

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    { text = '', size = 'large', icon, isIconAfter = false, children, disabled, isBlock, ...rest },
    ref,
  ) => (
    <Styled.DSTextButtonWrapper
      {...rest}
      $size={size}
      $disabled={disabled}
      $isBlock={isBlock}
      ref={ref}
    >
      <IconBox
        text={text || (children as string)}
        isIconAfter={isIconAfter}
        icon={icon}
        size={size === 'small' ? 'medium' : size}
        gap={4}
      />
    </Styled.DSTextButtonWrapper>
  ),
);

export default TextButton;
