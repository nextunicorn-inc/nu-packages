import React from 'react';
import { CheckIcon } from '../MultiSelect.icons';
import * as Styled from '../MultiSelect.styled';
import { Option } from '../MultiSelect.types';

interface IDefaultItemRendererProps {
  checked: boolean;
  option: Option;
  disabled?: boolean;
  onClick;
  isCheckboxShowing?: boolean;
}

const DefaultItemRenderer = ({
  checked,
  option,
  onClick,
  disabled,
  isCheckboxShowing = true,
}: IDefaultItemRendererProps) => (
  <Styled.DefaultItemRendererWrapper $disabled={disabled}>
    {isCheckboxShowing && <CheckIcon selected={checked} />}
    <input type="checkbox" onChange={onClick} checked={checked} tabIndex={-1} disabled={disabled} />
    <span>{option.label}</span>
  </Styled.DefaultItemRendererWrapper>
);

export default DefaultItemRenderer;
