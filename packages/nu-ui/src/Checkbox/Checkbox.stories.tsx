import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxGroup } from '.';
import type { CheckboxValueType, CheckboxProps, CheckboxChangeEvent } from './Checkbox.types';

export default {
  title: 'Components/SelectControl/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox>Checkbox</Checkbox>;

export const Indeterminate: Story<CheckboxProps> = (args) => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const [checkedList, setCheckedList] = React.useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <hr />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

export const Disabled: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
    <br />
    <Checkbox indeterminate disabled />
  </>
);

export const GroupCheckbox: Story<CheckboxProps> = (args) => {
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('default GroupCheckbox onChange Event!');
  };

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  return (
    <>
      <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <CheckboxGroup
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </>
  );
};
