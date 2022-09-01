import { FocusEvent, ReactElement } from 'react';

type ToggleProps = Partial<{
  checked: boolean;
  disabled: boolean;
  defaultChecked: boolean;
  onChange: () => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  className: string;
  name: string;
  value: string;
  id: string;
  icons: boolean | { checked: ReactElement; unchecked: ReactElement };
}>;

export default ToggleProps;
