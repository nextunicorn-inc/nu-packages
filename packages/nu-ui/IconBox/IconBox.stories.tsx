import styled from '@emotion/styled';
import * as Icons from '@nextunicorn/icons';
import { Story, Meta } from '@storybook/react';
import IconBox from './IconBox';
import { IconBoxProps } from './IconBox.types';

export default {
  title: 'Components/Icons',
  component: IconBox,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 100px;
`;

export const Template: Story<IconBoxProps> = (args) => {
  return (
    <Layout>
      {Object.entries(Icons).map(([name, Icon]) => (
        <Div>
          <IconBox icon={<Icon />} />
          <div>{name.substring(4)}</div>
        </Div>
      ))}
    </Layout>
  );
};

Template.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
