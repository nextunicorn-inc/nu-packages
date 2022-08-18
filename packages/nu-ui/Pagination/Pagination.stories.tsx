import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import Pagination from './Pagination';

import type { PaginationProps } from './Pagination.types';

export default {
  title: 'Components/Pagination',
  component: Pagination,
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

const Template: Story<PaginationProps> = (args) => (
  <Layout>
    <Row>
      <h4>Large Size</h4>
    </Row>
    <Row>
      <Pagination {...args} size="large" page={1} totalPage={0} visiblePageList={5} />
    </Row>
    <Row>
      <Pagination {...args} type="extra" size="large" page={1} totalPage={12} visiblePageList={5} />
    </Row>

    <br />

    <Row>
      <h4>Small Size</h4>
    </Row>
    <Row>
      <Pagination {...args} size="small" page={1} totalPage={1} visiblePageList={5} />
    </Row>
    <Row>
      <Pagination {...args} type="extra" size="small" page={1} totalPage={12} visiblePageList={5} />
    </Row>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  onChangePage: (page: number) => alert(page),
};
