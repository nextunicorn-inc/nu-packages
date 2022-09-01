import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import Toggle from './Toggle';
import ToggleProps from './Toggle.types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const WrapperLabelTag: Story<ToggleProps> = (args) => {
  const [baconIsReady, setBaconReady] = useState<boolean>(false);

  return (
    <label>
      <Toggle {...args} defaultChecked={baconIsReady} onChange={() => setBaconReady(false)} />
      <span>Wrapper label tag</span>
    </label>
  );
};

export const AdjacentLabelTag: Story<ToggleProps> = (args) => {
  const [cheeseIsReady, setCheeseReady] = useState<boolean>(false);

  return (
    <>
      <Toggle
        {...args}
        id="cheese-status"
        checked={cheeseIsReady}
        onChange={() => setCheeseReady(!cheeseIsReady)}
      />
      <label htmlFor="cheese-status">Adjacent label tag</label>
    </>
  );
};
