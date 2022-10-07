import type { HTMLAttributes, ReactElement } from 'react';
import type { SerializedStyles } from '@emotion/react';
import type { ChildrenProps, ReactStandardProps } from '@nextunicorn/types';

export type DropdownItemType = {
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  submenu?: { title: string; href?: string }[];
};

export interface DropdownItemsProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {
  data: DropdownItemType;
  onChange?: (...args: unknown[]) => void;
  onClose?: () => void;
}

export interface DropdownMenuProps
  extends HTMLAttributes<HTMLDivElement>,
    ChildrenProps,
    ReactStandardProps {
  selectedValue?: ReactElement | string;
  data?: DropdownItemType[];
  onChange?: (event: any) => void;
  className?: string;
  cx?: SerializedStyles;
}
