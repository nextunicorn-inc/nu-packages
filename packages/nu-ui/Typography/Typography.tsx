import * as Styled from './Typography.styled';
import type TypoProps from './Typography.types';

const Typography = ({ weight, size, color, children, ...rest }: TypoProps) => (
  <Styled.TypographyWrapper weight={weight} size={size} color={color} {...rest}>
    {children}
  </Styled.TypographyWrapper>
);

export default Typography;
