import React from 'react';
import { Meta, Story } from '@storybook/react';
import Asterisk from './Asterisk';

export default {
  title: 'Components/Asterisk',
  component: Asterisk,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <Asterisk text="참고 문자열이에요🦄" {...args} />;

export const Default = Template.bind({});
