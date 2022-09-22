import React from 'react';

import { MultiSelectProvider } from './Select.hooks';
import { SelectProps } from './Select.types';
import Select from './Select';

const MultiSelect = (props: SelectProps) => (
  <MultiSelectProvider props={props}>
    <Select />
  </MultiSelectProvider>
);

export default MultiSelect;
