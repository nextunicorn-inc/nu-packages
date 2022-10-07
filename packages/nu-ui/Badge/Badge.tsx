import React from 'react';
import * as Styled from './Badge.styled';
import { IconBox } from '../IconBox';

import type { BadgeProps } from './Badge.types';

const Badge = ({
  text = '',
  kind,
  size = 'medium',
  color = 'blue',
  icon,
  isIconOnly = false,
  isIconAfter = false,
  style,
  ...rest
}: BadgeProps) => (
  <Styled.DSBadgeWrapper $kind={kind} $size={size} $color={color} style={style} {...rest}>
    <IconBox
      text={text}
      size={size}
      icon={icon}
      isIconOnly={isIconOnly}
      isIconAfter={isIconAfter}
    />
  </Styled.DSBadgeWrapper>
);

export default Badge;
