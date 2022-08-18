import React from 'react';
import * as Styled from './NotiBadge.styled';
import type { NotiBadgeProps } from './NotiBadge.types';

const NotiBadge = ({ count, size = 'large', color = 'red', children }: NotiBadgeProps) => (
  <Styled.DSNotiBadgeWrapper>
    {children}
    <Styled.Notification $size={size} $color={color} $content={!!count}>
      {count || ''}
    </Styled.Notification>
  </Styled.DSNotiBadgeWrapper>
);

export default NotiBadge;
