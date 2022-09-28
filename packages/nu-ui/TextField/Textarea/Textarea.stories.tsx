import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import Textarea from './Textarea';

import type { TextareaProps } from './Textarea.types';

export default {
  title: 'Components/TextField/Textarea',
  component: Textarea,
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
  gap: 2em;
`;

const HeadLine = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

const Template: Story<TextareaProps> = (args) => {
  const [question, setQuestion] = useState('');
  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setQuestion(event.target.value);

  return (
    <Layout>
      <HeadLine>label, mustInput, charLimit, helperText</HeadLine>
      <Row>
        <Textarea
          {...args}
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          helperText="Helper text"
          onChange={onChangeMessage}
          applyMaxLength
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          errorText="Helper text"
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>label, mustInput, helperText</HeadLine>
      <Row>
        <Textarea
          {...args}
          label="label"
          placeholder="Placeholder text"
          mustInput
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          errorText="Helper text"
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>label, mustInput, charLimit</HeadLine>
      <Row>
        <Textarea
          {...args}
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          charLimit={1000}
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>label, mustInput</HeadLine>
      <Row>
        <Textarea
          {...args}
          label="label"
          placeholder="Placeholder text"
          mustInput
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          label="label"
          placeholder="Placeholder text"
          mustInput
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>charLimit, helperText</HeadLine>
      <Row>
        <Textarea
          {...args}
          placeholder="Placeholder text"
          charLimit={1000}
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          placeholder="Placeholder text"
          charLimit={1000}
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          placeholder="Placeholder text"
          charLimit={1000}
          errorText="Helper text"
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>helperText</HeadLine>
      <Row>
        <Textarea
          {...args}
          placeholder="Placeholder text"
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          placeholder="Placeholder text"
          helperText="Helper text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          placeholder="Placeholder text"
          errorText="Helper text"
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>charLimit</HeadLine>
      <Row>
        <Textarea
          {...args}
          placeholder="Placeholder text"
          charLimit={1000}
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          placeholder="Placeholder text"
          charLimit={1000}
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          placeholder="Placeholder text"
          charLimit={1000}
          isError
          onChange={onChangeMessage}
        />
      </Row>
      <HeadLine>pure</HeadLine>
      <Row>
        <Textarea {...args} placeholder="Placeholder text" onChange={onChangeMessage} />
        <Textarea
          {...args}
          defaultValue="텍스트가 이미 입력되어 있어요"
          placeholder="Placeholder text"
          onChange={onChangeMessage}
        />
        <Textarea
          {...args}
          defaultValue="에러가 발생했어요"
          placeholder="Placeholder text"
          isError
          onChange={onChangeMessage}
        />
      </Row>
    </Layout>
  );
};

export const Default = Template.bind({});
