import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chip from './Chip';

import type { ChipProps } from './Chip.types';

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ChipProps> = (args) => (
  <Chip {...args} key="Tag_1" text={`#${'넥스트유니콘 Chip'}`} />
);

export const Default = Template.bind({});

export const Closeable = Template.bind({});
Closeable.args = {
  closeable: true,
};
