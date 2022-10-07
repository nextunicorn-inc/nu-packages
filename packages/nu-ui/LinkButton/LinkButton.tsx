import { IconBox } from '../IconBox';
import * as Styled from './LinkButton.styled';
//
import LinkButtonProps from './LinkButton.types';

const LinkButton = ({
  text = '',
  size = 'large',
  icon,
  isIconAfter = false,
  href,
  ...rest
}: LinkButtonProps) => (
  <Styled.DSLinkButtonWrapper {...rest} $size={size} href={href}>
    <IconBox
      text={text}
      isIconAfter={isIconAfter}
      icon={icon}
      size={size === 'small' ? 'medium' : size}
    />
  </Styled.DSLinkButtonWrapper>
);

export default LinkButton;
