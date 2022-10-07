import React from 'react';
import * as Styled from './HelperText.styled';

import type { HelperProps } from './HelperText.types';

const HelperText = ({ children, color = 'gray', ...rest }: HelperProps) => (
  <Styled.DSHelperTextWrapper $color={color} {...rest}>
    {children}
  </Styled.DSHelperTextWrapper>
);

export default HelperText;
