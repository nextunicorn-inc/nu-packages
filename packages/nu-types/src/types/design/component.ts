import React from 'react';

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}

export interface DisableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface ErrorProps {
  error?: boolean;
}

export interface ActiveProps {
  active?: boolean;
}

export interface DataEventProps {
  dataEvent?: string;
}

export interface IconProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  isIconOnly?: boolean;
  isIconAfter?: boolean;
}

export interface StyleProps {
  style?: React.CSSProperties;
}
