import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import Toggle from './Toggle';
import { ToggleProps } from './Toggle.types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<ToggleProps> = (args) => {
  const [newsletter, setNewsletter] = useState(false);
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);

  const onNewsletterChange = ({ target }) => {
    setNewsletter(target.checked);
  };

  const onDailyChange = ({ target }) => {
    setDaily(target.checked);
  };

  const onWeeklyChange = ({ target }) => {
    setWeekly(target.checked);
  };

  const onMonthlyChange = ({ target }) => {
    setMonthly(target.checked);
  };

  return (
    <div>
      <div>
        <label>
          <Toggle
            id="newsletter-status"
            defaultChecked={newsletter}
            aria-labelledby="newsletter-label"
            onChange={onNewsletterChange}
          />
          <span id="newsletter-label">Adjacent label, but not standard tag</span>
        </label>
      </div>
      <div>
        <Toggle
          id="daily"
          disabled={!newsletter}
          defaultChecked={daily}
          aria-labelledby="daily-label"
          onChange={onDailyChange}
        />
        <label htmlFor="daily">Daily Briefs</label>
      </div>
      <div>
        <Toggle
          id="weekly"
          disabled={!newsletter}
          defaultChecked={weekly}
          aria-labelledby="weekly-label"
          onChange={onWeeklyChange}
        />
        <label htmlFor="weekly">Weekly Summary</label>
      </div>
      <div>
        <Toggle
          id="monthly"
          disabled={!newsletter}
          defaultChecked={monthly}
          aria-labelledby="monthly-label"
          onChange={onMonthlyChange}
        />
        <label htmlFor="monthly">Monthly Digest</label>
      </div>
      <div>
        <h2>States</h2>
        <p>Newsletter: {String(newsletter)}</p>
        <p>Daily: {String(daily)}</p>
        <p>Weekly: {String(weekly)}</p>
        <p>Monthly: {String(monthly)}</p>
      </div>
    </div>
  );
};
