import { DecoratorFn } from '@storybook/react';
import { NextUnicornGlobalStyle } from '../src';
import '../src/@styles/variables.css';

export const decorators: DecoratorFn[] = [
  (Story) => (
    <>
      <NextUnicornGlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
