import React from 'react';

import { useMultiSelect } from '../Select.hooks';
import * as Styled from '../Select.styled';

export const DropdownHeader = () => {
  const { t, value, options, valueRenderer } = useMultiSelect();

  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);

  const getSelectedText = () => value.map((s) => s.label).join(', ');

  return noneSelected ? (
    <Styled.DropdownHeaderWrapper $none>
      {customText || t('selectSomeItems')}
    </Styled.DropdownHeaderWrapper>
  ) : (
    <Styled.DropdownHeaderWrapper>
      {customText || (allSelected ? t('allItemsAreSelected') : getSelectedText())}
    </Styled.DropdownHeaderWrapper>
  );
};
