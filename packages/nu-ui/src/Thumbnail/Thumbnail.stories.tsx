import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import Thumbnail from './Thumbnail';
import { ThumbnailProps } from './Thumbnail.types';

export default {
  title: 'Components/Thumbnail',
  component: Thumbnail,
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

export const Default1by1: Story<ThumbnailProps> = (args) => (
  <Layout>
    <Row>
      <Thumbnail onClick={() => alert('size: xxlarge')} size="xxlarge" cover={<img alt="?!?!" />} />
      <Thumbnail onClick={() => alert('size: xlarge')} size="xlarge" />
      <Thumbnail onClick={() => alert('size: large')} size="large" />
      <Thumbnail onClick={() => alert('size: medium')} size="medium" />
      <Thumbnail onClick={() => alert('size: small')} size="small" />
      <Thumbnail onClick={() => alert('size: xsmall')} size="xsmall" />
      <Thumbnail onClick={() => alert('size: xxsmall')} size="xxsmall" />
      <Thumbnail onClick={() => alert('size: xxxsmall')} size="xxxsmall" />
    </Row>
  </Layout>
);

export const Default2by3: Story<ThumbnailProps> = (args) => (
  <Layout>
    <Thumbnail width="160px" category="2by3" onClick={() => alert('category: 2by3')} />
    <Thumbnail width="320px" category="2by3" onClick={() => alert('category: 2by3')} />
    <Thumbnail width="480px" category="2by3" onClick={() => alert('category: 2by3')} />
  </Layout>
);

export const Default16by9: Story<ThumbnailProps> = (args) => (
  <Layout>
    <Thumbnail width="160px" category="16by9" onClick={() => alert('category: 16by9')} />
    <Thumbnail width="320px" category="16by9" onClick={() => alert('category: 16by9')} />
    <Thumbnail width="480px" category="16by9" onClick={() => alert('category: 16by9')} />
  </Layout>
);
