import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider from './Divider';
import DividerProps from './Divider.types';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<DividerProps> = (args) => (
  <div style={{ width: '100px' }}>
    <div>텍스트</div>
    <Divider type="hr" />
    <div>텍스트</div>

    <div>텍스트</div>
    <Divider>or</Divider>
    <div>텍스트</div>
  </div>
);

export const Default = Template.bind({});
