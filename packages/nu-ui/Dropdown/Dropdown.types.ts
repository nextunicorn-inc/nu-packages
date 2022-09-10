export type DropdownItemType = {
  title: string;
  href?: string;
  submenu?: { title: string; href?: string }[];
};

export interface DropdownItemsProps {
  data: DropdownItemType;
  onChange?: (...args: unknown[]) => void;
  onClose?: () => void;
}
