import { Meta } from '@storybook/react';
import styled from '@emotion/styled';
import Typography from './Typography';
import { FontSize, FontSizeKey, FontWeight, FontWeightKey } from '../@foundations';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const fontSizeList: FontSizeKey[] = Object.keys(FontSize) as FontSizeKey[];
const fontWeightList: FontWeightKey[] = Object.keys(FontWeight) as FontWeightKey[];

export const DefaultTypography = () => (
  <Wrapper>
    {fontSizeList.map((size) =>
      fontWeightList.map((weight) => {
        if (size.includes('angels') || weight.includes('angels')) return <></>;

        return (
          <Area key={weight}>
            <Size>
              <Typography size={size} weight={weight}>
                {size}
              </Typography>
            </Size>
            <Weight>
              <Typography size={size} weight={weight}>
                {weight}
              </Typography>
            </Weight>
            <Typography size={size} weight={weight}>
              투자자 찾고 싶을 땐, 넥스트유니콘
            </Typography>
          </Area>
        );
      }),
    )}
  </Wrapper>
);

DefaultTypography.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

export const AngelsTypography = () => (
  <Wrapper>
    {fontSizeList.map((size) =>
      fontWeightList.map((weight) => {
        if (!(size.includes('angels') && weight.includes('angels'))) return <></>;
        return (
          <Area key={weight}>
            <Size>
              <Typography size={size} weight={weight}>
                {size}
              </Typography>
            </Size>
            <Weight>
              <Typography size={size} weight={weight}>
                {weight}
              </Typography>
            </Weight>
            <Typography size={size} weight={weight}>
              투자자 찾고 싶을 땐, 넥스트유니콘
            </Typography>
          </Area>
        );
      }),
    )}
  </Wrapper>
);

AngelsTypography.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 15px;
`;

const Area = styled.div`
  display: flex;
  align-items: center;
`;

const Size = styled.p`
  width: 100px;
  text-transform: capitalize;
`;

const Weight = styled.p`
  width: 200px;
  text-transform: capitalize;
`;
