import { ChildrenProps } from '@nextunicorn/types';
import { HTMLAttributes } from 'react';

export type DropdownItemType = {
  title: string;
  href?: string;
  submenu?: { title: string; href?: string }[];
};

export interface DropdownItemsProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {
  data: DropdownItemType;
  onChange?: (...args: unknown[]) => void;
  onClose?: () => void;
}

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement>, ChildrenProps {
  selectedValue?: string;
  data?: DropdownItemType[];
  onChange?: (event: any) => void;
  className?: string;
}
