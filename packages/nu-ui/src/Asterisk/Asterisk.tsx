import React from 'react';
import * as Styled from './Asterisk.styled';

const Asterisk = ({ text = '' }: { text?: string }) => (
  <Styled.DSAsteriskWrapper>*{text}</Styled.DSAsteriskWrapper>
);

export default React.memo(Asterisk);
