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
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const IconGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
const sizes = [undefined, '16', '20', '24', '32', '40'] as const;
const colors = [undefined, 'red'];
export const Template: Story<IconBoxProps> = (args) => {
  return (
    <Layout>
      {Object.entries(Icons)
        .map(([name, Icon]) => (
          <div style={{ border: 'inset' }}>
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>{name.substring(4)}</h4>
            <IconGroup>
              {colors
                .map((color) =>
                  sizes.map((size) => (
                    <Div>
                      {<IconBox icon={<Icon color={color} size={size} />} />}
                      <div>{`size:${size ?? 'default'}, color: ${color ?? 'default'}`}</div>
                    </Div>
                  )),
                )
                .flat()}
            </IconGroup>
          </div>
        ))
        .flat()}
    </Layout>
  );
};

Template.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
