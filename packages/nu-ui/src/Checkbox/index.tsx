import type React from 'react';
import type { CheckboxProps } from './Checkbox.types';
import InternalCheckbox from './Checkbox';

export { default as CheckboxGroup } from './CheckboxGroup';

export * from './Checkbox.types';

type CompoundedComponent = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
>;

export const Checkbox = InternalCheckbox as CompoundedComponent;
