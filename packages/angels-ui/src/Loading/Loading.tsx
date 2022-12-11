import {
  AngelsPrimaryLoading,
  AngelsSecondaryLoading,
  AngelsTertiaryLoading,
} from './Loading.icons';
import * as Styled from './Loading.styled';
//
import type LoadingProps from './Loading.types';

const LoadingTheme = {
  primary: <AngelsPrimaryLoading />,
  secondary: <AngelsSecondaryLoading />,
  tertiary: <AngelsTertiaryLoading />,
};

const Loading = ({ kind = 'primary' }: LoadingProps) => (
  <Styled.DSLoadingWrapper>{LoadingTheme[kind]}</Styled.DSLoadingWrapper>
);

export default Loading;
