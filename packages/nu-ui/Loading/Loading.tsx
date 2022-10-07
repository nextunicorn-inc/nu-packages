import React from 'react';
import {
  AngelsPrimaryLoading,
  AngelsSecondaryLoading,
  AngelsTertiaryLoading,
  DefaultLoading,
  SecondaryLoading,
} from './Loading.icons';
//
import * as Styled from './Loading.styled';
//
import type { LoadingProps } from './Loading.types';

const LoadingTheme = {
  primary: <DefaultLoading />,
  secondary: <SecondaryLoading />,
  tertiary: <DefaultLoading />,
  'angels-primary': <AngelsPrimaryLoading />,
  'angels-secondary': <AngelsSecondaryLoading />,
  'angels-tertiary': <AngelsTertiaryLoading />,
};

const Loading = ({ kind = 'primary' }: LoadingProps) => (
  <Styled.DSLoadingWrapper>{LoadingTheme[kind]}</Styled.DSLoadingWrapper>
);

export default Loading;
