import React from 'react';

export type NotiBadgeProps = {
  count?: number;
  color?: 'blue' | 'red';
  size?: 'large' | 'small';
  children?: React.ReactNode;
};
