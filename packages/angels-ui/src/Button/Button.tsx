import { forwardRef } from 'react';
//
import * as Styled from './Button.styled';
//
import type ButtonProps from './Button.types';
import { IconBox } from '../IconBox';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text = '',
      variant = 'primary',
      size = 'medium',
      icon,
      isIconOnly = false,
      isIconAfter = false,
      isBlock = false,
      onClick,
      disabled = false,
      loading = false,
      style,
      children,
      ...rest
    },
    ref,
  ) => (
    <Styled.DSButtonWrapper
      {...rest}
      ref={ref}
      onClick={onClick}
      style={style}
      $variant={variant}
      $size={size}
      $isBlock={isBlock}
      disabled={disabled}
      $disabled={disabled}
    ><IconBox
      text={text || (children as string)}
      isIconOnly={isIconOnly}
      isIconAfter={isIconAfter}
      icon={icon}
      size={size}
      gap={4}
    />
    </Styled.DSButtonWrapper>
  ),
);

Button.displayName = 'AngelsButton';

export default Button;
