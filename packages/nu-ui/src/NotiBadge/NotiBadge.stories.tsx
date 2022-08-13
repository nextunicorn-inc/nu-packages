import styled from '@emotion/styled';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NotiBadge } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Badge/NotiBadge',
  component: NotiBadge,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Row = styled.div`
  display: flex;
  gap: 40px;
`;

export const Default: Story<{ children: React.ReactNode }> = () => (
  <>
    <Row>
      <NotiBadge count={2} color="blue" size="large">
        <span>Count:Blue:Large</span>
      </NotiBadge>
      <NotiBadge count={2} color="red" size="large">
        <span>Count:Red:Large</span>
      </NotiBadge>
      <NotiBadge color="blue" size="large">
        <span>Blue:Large</span>
      </NotiBadge>
      <NotiBadge color="red" size="large">
        <span>Red:Large</span>
      </NotiBadge>
    </Row>
    <br />
    <Row>
      <NotiBadge count={2} color="blue" size="small">
        <span>Count:Blue:Small</span>
      </NotiBadge>
      <NotiBadge count={2} color="red" size="small">
        <span>Count:Red:Small</span>
      </NotiBadge>
      <NotiBadge color="blue" size="small">
        <span>Blue:Small</span>
      </NotiBadge>
      <NotiBadge color="red" size="small">
        <span>Red:Small</span>
      </NotiBadge>
    </Row>
  </>
);

export const Buttons: Story<{ children: React.ReactNode }> = () => (
  <>
    <Row>
      <NotiBadge count={2} color="blue" size="large">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge count={2} color="red" size="large">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge color="blue" size="large">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge color="red" size="large">
        <Button text="넥스트유니콘" />
      </NotiBadge>
    </Row>
    <br />
    <Row>
      <NotiBadge count={2} color="blue" size="small">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge count={2} color="red" size="small">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge color="blue" size="small">
        <Button text="넥스트유니콘" />
      </NotiBadge>
      <NotiBadge color="red" size="small">
        <Button text="넥스트유니콘" />
      </NotiBadge>
    </Row>
  </>
);
