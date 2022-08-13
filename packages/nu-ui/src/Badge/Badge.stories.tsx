import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import Badge from './Badge';
import { CheckCircle20Icon } from './Badge.icons';

import type { BadgeColor, BadgeProps } from './Badge.types';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const colors: BadgeColor[] = [
  'lightCoral',
  'coral',
  'lightYellow',
  'yellow',
  'lightBlue',
  'blue',
  'deepBlue',
  'lightGray',
  'gray',
  'black',
];

const Template: Story<BadgeProps> = (args) => (
  <Layout>
    {colors.map((color) => (
      <>
        <Row>
          <Badge {...args} text="기본 배지" size="large" color={color} />
          <Badge {...args} text="기본 배지" size="medium" color={color} />
          <Badge {...args} text="기본 배지" size="small" color={color} />
        </Row>

        <Row>
          <Badge {...args} text="기본 배지" size="large" icon={CheckCircle20Icon} color={color} />
          <Badge {...args} text="기본 배지" size="medium" icon={CheckCircle20Icon} color={color} />
          <Badge {...args} text="기본 배지" size="small" icon={CheckCircle20Icon} color={color} />
        </Row>

        <Row>
          <Badge
            {...args}
            text="기본 배지"
            size="large"
            icon={CheckCircle20Icon}
            isIconAfter
            color={color}
          />
          <Badge
            {...args}
            text="기본 배지"
            size="medium"
            icon={CheckCircle20Icon}
            isIconAfter
            color={color}
          />
          <Badge
            {...args}
            text="기본 배지"
            size="small"
            icon={CheckCircle20Icon}
            isIconAfter
            color={color}
          />
        </Row>

        <br />
      </>
    ))}
  </Layout>
);

export const DefaultBadge = Template.bind({});
export const BorderBadge: Story<BadgeProps> = (args) => (
  <Layout>
    <Row>
      <Badge {...args} text="기본 배지" kind="border" size="large" />
      <Badge {...args} text="기본 배지" kind="border" size="medium" />
      <Badge {...args} text="기본 배지" kind="border" size="small" />
    </Row>

    <Row>
      <Badge {...args} text="기본 배지" kind="border" size="large" icon={CheckCircle20Icon} />
      <Badge {...args} text="기본 배지" kind="border" size="medium" icon={CheckCircle20Icon} />
      <Badge {...args} text="기본 배지" kind="border" size="small" icon={CheckCircle20Icon} />
    </Row>

    <Row>
      <Badge
        {...args}
        text="기본 배지"
        kind="border"
        size="large"
        icon={CheckCircle20Icon}
        isIconAfter
      />
      <Badge
        {...args}
        text="기본 배지"
        kind="border"
        size="medium"
        icon={CheckCircle20Icon}
        isIconAfter
      />
      <Badge
        {...args}
        text="기본 배지"
        kind="border"
        size="small"
        icon={CheckCircle20Icon}
        isIconAfter
      />
    </Row>
  </Layout>
);
