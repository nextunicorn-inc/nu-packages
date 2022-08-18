import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import { IconBookmark20Deselected } from '@nextunicorn/icons';
import Input from './Input';

import type { InputProps } from './Input.types';

export default {
  title: 'Components/TextField/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Template: Story<InputProps> = (args) => {
  const icon = () => <IconBookmark20Deselected />;
  return (
    <Layout>
      <Row>
        <Input
          {...args}
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
          charLimit={10}
        />
        <Input
          {...args}
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
          suffixIcon={icon}
          charLimit={10}
        />
        <Input
          {...args}
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
          defaultValue="이미 값이 있는 경우"
          charLimit={10}
        />
        <Input
          {...args}
          isError
          mustInput
          label="label"
          errorText="Helper text"
          placeholder="placeholder text"
          defaultValue="입력 값에 에러가 있는 경우"
          charLimit={10}
        />
      </Row>

      <Row>
        <Input {...args} helperText="Helper text" placeholder="placeholder text" />
        <Input
          {...args}
          helperText="Helper text"
          placeholder="placeholder text"
          prefixIcon={icon}
        />
        <Input
          {...args}
          helperText="Helper text"
          placeholder="placeholder text"
          defaultValue="이미 값이 있는 경우"
        />
        <Input
          {...args}
          isError
          errorText="Helper text"
          placeholder="placeholder text"
          defaultValue="입력 값에 에러가 있는 경우"
        />
      </Row>

      <Row>
        <Input
          {...args}
          isSearch
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
        />
        <Input
          {...args}
          isSearch
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
        />
        <Input
          {...args}
          isSearch
          mustInput
          label="label"
          helperText="Helper text"
          placeholder="placeholder text"
          defaultValue="이미 값이 있는 경우"
        />
      </Row>

      <Row>
        <Input {...args} isSearch placeholder="placeholder text" />
        <Input {...args} isSearch placeholder="placeholder text" />
        <Input
          {...args}
          isSearch
          placeholder="placeholder text"
          defaultValue="이미 값이 있는 경우"
        />
      </Row>
    </Layout>
  );
};

export const Default = Template.bind({});
export const Smaller = Template.bind({});

Smaller.args = {
  inputSize: 'small',
};
