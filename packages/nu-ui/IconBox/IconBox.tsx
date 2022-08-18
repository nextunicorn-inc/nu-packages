import React from 'react';
import * as Styled from './IconBox.styled';

import type { IconBoxProps } from './IconBox.types';

const TextAfterIcon = ({
  text,
  size,
  icon: Icon,
  gap,
}: Omit<IconBoxProps, 'isIconOnly' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper $size={size} $gap={gap}>
      <div>{text}</div>
      <IconElement />
    </Styled.DSIconBoxWrapper>
  );
};

const TextBeforeIcon = ({
  text,
  size,
  icon: Icon,
  gap,
}: Omit<IconBoxProps, 'isIconOnly' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper $size={size} $gap={gap}>
      <IconElement />
      <div>{text}</div>
    </Styled.DSIconBoxWrapper>
  );
};

const OnlyIcon = ({ size, icon: Icon, isIconOnly }: Omit<IconBoxProps, 'text' | 'isIconAfter'>) => {
  const IconElement = Icon as unknown as typeof React.Component;
  return (
    <Styled.DSIconBoxWrapper $size={size} $isIconOnly={isIconOnly}>
      <IconElement />
    </Styled.DSIconBoxWrapper>
  );
};

const IconBox = ({ text, size = 'medium', isIconOnly, isIconAfter, icon, gap }: IconBoxProps) => {
  if (!icon) return <>{text}</>;
  if (isIconOnly) return <OnlyIcon size={size} icon={icon} isIconOnly={isIconOnly} />;
  if (isIconAfter) return <TextAfterIcon size={size} text={text} icon={icon} gap={gap} />;
  return <TextBeforeIcon size={size} text={text} icon={icon} gap={gap} />;
};

export default IconBox;
