import * as Styled from './Typography.styled';
import type TypoProps from './Typography.types';

const Typography = ({ weight, size, color, children }: TypoProps) => (
  <Styled.TypographyWrapper weight={weight} size={size} color={color}>
    {children}
  </Styled.TypographyWrapper>
);

export default Typography;
