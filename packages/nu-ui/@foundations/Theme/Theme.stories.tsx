import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Color from '../Color';
import Themes from './Theme';
import type ThemeType from './Theme.types';

export default {
  title: 'Foundations/Theme',
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta;

const title: ThemeType = {
  Common: {
    surface: '표면색',
    disabled: '비활성화 시',
    placeholder: '플레이스홀더',
    text: '텍스트',
    subtitle: '서브 타이틀',
    title: '타이틀',
    background: '배경색',
    primary: '테마:primary',
    alert: '경고',
    error: '에러',
  },

  HelperBgColor: {
    light: 'Light 백그라운드 컬러',
    dark: 'Dark 백그라운드 컬러',
  },

  HelperTextColor: {
    light: 'Light 텍스트 컬러',
    dark: 'Dark 텍스트 컬러',
    error: 'Error 텍스트 컬러',
    gray: 'Gray 텍스트 컬러',
  },
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ThemeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 10px;
`;

const ThemeArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 200px;
  height: 200px;

  padding: 10px;
`;

const ThemeTile = styled.div<{
  color: string;
}>`
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
  border-radius: 12px;
  border: 1px solid ${Color.naturalGray1};
  background-color: ${({ color }) => color};
`;

const ThemeTitle = styled.div``;

const ThemeHexCode = styled.div``;

export const ThemeTemplate = () => (
  <Layout>
    {Object.keys(Themes).map((Category) => (
      <>
        <h1>{Category}</h1>
        <ThemeWrapper key={Category}>
          {Object.entries(Themes[Category]).map(([themeKey, themeValue]) => (
            <ThemeArea key={themeKey}>
              <Title>{title[Category][themeKey]}</Title>
              <ThemeBox>
                <ThemeTile color={themeValue as string} />
                <ThemeTitle>테마 키 : {themeKey}</ThemeTitle>
                <ThemeHexCode>{Themes[Category][themeKey]}</ThemeHexCode>
              </ThemeBox>
            </ThemeArea>
          ))}
        </ThemeWrapper>
      </>
    ))}
  </Layout>
);

ThemeTemplate.storyName = 'Theme';
