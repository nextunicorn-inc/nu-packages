import React from 'react';
import * as Styled from './IconBox.styled';

import type { IconBoxProps } from './IconBox.types';

const TextAfterIcon = ({
  text,
  size,
  icon: Icon,
  gap,
  style,
}: Omit<IconBoxProps, 'isIconOnly' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper style={style} $size={size} $gap={gap}>
      <div>{text}</div>
      {typeof Icon === 'object' ? Icon : <IconElement />}
    </Styled.DSIconBoxWrapper>
  );
};

const TextBeforeIcon = ({
  text,
  size,
  icon: Icon,
  gap,
  style,
}: Omit<IconBoxProps, 'isIconOnly' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper style={style} $size={size} $gap={gap}>
      {typeof Icon === 'object' ? Icon : <IconElement />}
      <div>{text}</div>
    </Styled.DSIconBoxWrapper>
  );
};

const OnlyIcon = ({
  size,
  icon: Icon,
  isIconOnly,
  style,
}: Omit<IconBoxProps, 'text' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper style={style} $size={size} $isIconOnly={isIconOnly}>
      {typeof Icon === 'object' ? Icon : <IconElement />}
    </Styled.DSIconBoxWrapper>
  );
};

const IconBox = ({
  text,
  size = 'medium',
  isIconOnly,
  isIconAfter,
  icon,
  gap,
  style,
  ...rest
}: IconBoxProps) => {
  if (!icon) return <>{text}</>;
  if (isIconOnly)
    return <OnlyIcon size={size} icon={icon} isIconOnly={isIconOnly} style={style} {...rest} />;
  if (isIconAfter)
    return <TextAfterIcon size={size} text={text} icon={icon} gap={gap} style={style} {...rest} />;
  return <TextBeforeIcon size={size} text={text} icon={icon} gap={gap} style={style} {...rest} />;
};

export default IconBox;
