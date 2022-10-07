import React from 'react';
import * as Styled from './NotiBadge.styled';
//
import type NotiBadgeProps from './NotiBadge.types';

const NotiBadge = ({ count, size = 'large', color = 'red', children, ...rest }: NotiBadgeProps) => (
  <Styled.DSNotiBadgeWrapper {...rest}>
    {children}
    <Styled.Notification $size={size} $color={color} $content={!!count}>
      {count || ''}
    </Styled.Notification>
  </Styled.DSNotiBadgeWrapper>
);

export default NotiBadge;
