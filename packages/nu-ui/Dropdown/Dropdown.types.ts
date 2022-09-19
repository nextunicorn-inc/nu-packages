import { HTMLAttributes } from 'react';

export type DropdownItemType = {
  title: string;
  href?: string;
  submenu?: { title: string; href?: string }[];
};

export interface DropdownItemsProps extends HTMLAttributes<HTMLDivElement> {
  data: DropdownItemType;
  onChange?: (...args: unknown[]) => void;
  onClose?: () => void;
}
