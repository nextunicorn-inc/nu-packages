import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps, ItemProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const locations = [
    {
      label: '20',
      value: 20,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '100',
      value: 100,
    },
  ];

  const onChange = (item: ItemProps, name: string) => {
    console.log(item, name);
  };

  return <Dropdown {...args} list={locations} onChange={onChange} />;
};

export const Default = Template.bind({});

export const DefaultSelected = Template.bind({});

DefaultSelected.args = {
  selected: {
    label: '20',
    value: 20,
  },
};
