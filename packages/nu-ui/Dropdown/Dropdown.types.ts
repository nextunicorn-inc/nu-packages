import { ReactNode } from 'react';

export type ItemProps = { value: string | number; label: string };

export type DropdownProps = Partial<{
  id: string;
  name: string;
  width: string;
  onChange: ({ value, label }: ItemProps) => void;
  onClickOpen: () => void;
  title: string;
  list: ItemProps[];
  searchable: [string, string];
  selected: ItemProps;
  isTop: boolean;
  arrowUpIcon: ReactNode;
  arrowDownIcon: ReactNode;
}>;
