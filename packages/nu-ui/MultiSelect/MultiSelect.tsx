import React from 'react';

import { MultiSelectProvider } from './MultiSelect.hooks';
import { SelectProps } from './MultiSelect.types';
import MultiSelectSelect from './MultiSelect.select';

const MultiSelect = (props: SelectProps) => (
  <MultiSelectProvider props={props}>
    <MultiSelectSelect />
  </MultiSelectProvider>
);

export default MultiSelect;
