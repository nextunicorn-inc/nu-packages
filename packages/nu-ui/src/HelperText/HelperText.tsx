import React from 'react';
import * as Styled from './HelperText.styled';

import type { HelperProps } from './HelperText.types';

const HelperText = ({ children, color = 'gray', style }: HelperProps) => (
  <Styled.DSHelperTextWrapper $color={color} style={style}>
    {children}
  </Styled.DSHelperTextWrapper>
);

export default HelperText;
