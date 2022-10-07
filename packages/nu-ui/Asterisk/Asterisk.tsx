import React from 'react';
import * as Styled from './Asterisk.styled';
import AsteriskProps from './Asterisk.types';

const Asterisk = ({ text = '', ...rest }: AsteriskProps) => (
  <Styled.DSAsteriskWrapper {...rest}>*{text}</Styled.DSAsteriskWrapper>
);

export default React.memo(Asterisk);
