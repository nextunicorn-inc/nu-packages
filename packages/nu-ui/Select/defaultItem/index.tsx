import React from 'react';
import { CheckIcon } from '../Select.icons';
import * as Styled from '../Select.styled';
import { Option } from '../Select.types';

interface IDefaultItemRendererProps {
  checked: boolean;
  option: Option;
  disabled?: boolean;
  onClick;
}

const DefaultItemRenderer = ({ checked, option, onClick, disabled }: IDefaultItemRendererProps) => (
  <Styled.DefaultItemRendererWrapper $disabled={disabled}>
    <CheckIcon selected={checked} />
    <input type="checkbox" onChange={onClick} checked={checked} tabIndex={-1} disabled={disabled} />
    <span>{option.label}</span>
  </Styled.DefaultItemRendererWrapper>
);

export default DefaultItemRenderer;
