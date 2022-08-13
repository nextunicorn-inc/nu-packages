import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioGroup } from '.';
import { Button } from '../Button';
import type { RadioChangeEvent, RadioProps } from './Radio.types';

export default {
  title: 'Components/SelectControl/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<RadioProps> = (args) => <Radio>Radio</Radio>;

export const Disabled: Story<RadioProps> = (args) => {
  const [disabled, setDisabled] = React.useState(true);
  const toggleDisabled = () => setDisabled(!disabled);
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button
        type="button"
        onClick={toggleDisabled}
        style={{ marginTop: 16 }}
        text="Toggle disabled"
      />
    </>
  );
};

export const GroupRadio: Story<RadioProps> = (args) => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setValue(e.target.value);
  };

  return (
    <RadioGroup onChange={onChange} value={value}>
      <Radio value={1}>사과사과</Radio>
      <Radio value={2}>수박수박</Radio>
      <Radio value={3}>당근당근</Radio>
      <Radio value={4}>참외참외</Radio>
    </RadioGroup>
  );
};

export const OptionalRadioGroup: Story<RadioProps> = () => {
  const optionsWithDisabled = [
    { label: 'DisabledApple', value: 'Apple', disabled: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'DisabledOrange', value: 'Orange', disabled: true },
  ];

  const [value1, setValue] = React.useState('Pear');

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setValue(value);
  };

  return (
    <>
      <RadioGroup options={optionsWithDisabled} onChange={onChange} value={value1} />
    </>
  );
};
