import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import HelperText from './HelperText';

import type { HelperProps } from './HelperText.types';

export default {
  title: 'Components/HelperText',
  component: HelperText,
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

export const Template: Story<HelperProps> = (args) => (
  <Layout>
    <Row>
      <HelperText {...args} color="gray">
        기본 텍스트
      </HelperText>
    </Row>
    <Row>
      <HelperText {...args} color="error">
        에러 텍스트
      </HelperText>
    </Row>
    <Row>
      <HelperText {...args} color="dark">
        다크모드 텍스트
      </HelperText>
    </Row>
  </Layout>
);
