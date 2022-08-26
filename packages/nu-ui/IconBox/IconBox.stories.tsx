import styled from '@emotion/styled';
import Icons from '@nextunicorn/icons';
import { Story, Meta } from '@storybook/react';
import { Color } from '../@foundations';
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
  justify-content: center;
  gap: 30px;
  width: 200px;
  height: 200px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${Color.naturalGray1};
  }
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
