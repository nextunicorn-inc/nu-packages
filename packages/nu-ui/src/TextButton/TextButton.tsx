import React from 'react';
import { IconBox } from '../IconBox';
import * as Styled from './TextButton.styled';
import { TextButtonProps } from './TextButton.types';

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ text = '', size = 'large', icon, isIconAfter = false, ...rest }, ref) => (
    <Styled.DSTextButtonWrapper {...rest} $size={size} ref={ref}>
      <IconBox
        text={text}
        isIconAfter={isIconAfter}
        icon={icon}
        size={size === 'small' ? 'medium' : size}
        gap={4}
      />
    </Styled.DSTextButtonWrapper>
  ),
);

export default TextButton;
