import React from 'react';

type LinkButtonTypes = {
  text?: string;
  size?: 'large' | 'small';
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isIconAfter?: boolean;
};

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkButtonTypes;
