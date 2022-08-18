export type ItemProps = { value: string | number; label: string };

export type DropdownProps = Partial<{
  id: string;
  name: string;
  width: string;
  onChange: ({ value, label }: ItemProps, name: string) => void;
  onClickOpen: () => void;
  title: string;
  list: ItemProps[];
  searchable: [string, string];
  selected: ItemProps;
  isTop: boolean;
  arrowUpIcon: React.ReactNode;
  arrowDownIcon: React.ReactNode;
}>;
