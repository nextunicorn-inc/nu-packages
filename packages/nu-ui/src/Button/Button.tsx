import React from 'react';
import * as Styled from './Button.styled';
import { Loading } from '../Loading';
import { IconBox } from '../IconBox';

import type { ButtonProps } from './Button.types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
    >
      {loading ? (
        <Loading kind={variant} />
      ) : (
        <IconBox
          text={text}
          isIconOnly={isIconOnly}
          isIconAfter={isIconAfter}
          icon={icon}
          size={size}
          gap={4}
        />
      )}
    </Styled.DSButtonWrapper>
  ),
);

export default React.memo(Button);
