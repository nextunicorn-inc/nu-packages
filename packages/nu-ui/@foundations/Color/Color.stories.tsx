import { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Color, { colorList } from './Color';
import type { ColorKey } from './Color.types';

export default {
  title: 'Foundations/Color',
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 200px;
  margin: 10px;
  gap: 10px;

  padding: 10px;
`;

const ColorBox = styled.div<{
  color: ColorKey;
}>`
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
  border-radius: 12px;
  border: 1px solid ${Color.naturalGray1};
  background-color: ${({ color }) => Color[color]};
`;

const ColorTitle = styled.div``;

const ColorHexCode = styled.div``;

export const Template = () => (
  <Layout>
    {colorList.map((colorKey) => (
      <ColorWrapper key={colorKey}>
        <ColorBox color={colorKey} />
        <ColorTitle>{colorKey}</ColorTitle>
        <ColorHexCode>{Color[colorKey]}</ColorHexCode>
      </ColorWrapper>
    ))}
  </Layout>
);

Template.storyName = 'Color';
