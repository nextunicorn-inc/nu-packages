import React from 'react';

export interface DisableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface IconProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  isIconOnly?: boolean;
  isIconAfter?: boolean;
}

export interface ReactStandardProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}
