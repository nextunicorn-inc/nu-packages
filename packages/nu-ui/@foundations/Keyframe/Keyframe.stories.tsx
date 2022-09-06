import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { Button } from '../../Button';
import Color from '../Color';
import { BasicTransition } from '../Transition';
import { Keyframe } from './Keyframe';

import type { KeyframeKey } from './Keyframe.types';

export default {
  title: 'Foundations/Keyframe',
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BoxRange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
  border: 1px solid ${Color.naturalGray4};
  border-radius: 12px;
  background-color: ${Color.naturalGray1};

  overflow: hidden;
`;

const TransitionBox = styled.div<{
  keyframe: KeyframeKey;
}>`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background-color: ${Color.unicornBlue6};
  animation: ${({ keyframe }) =>
    css`
      ${Keyframe[keyframe]} ${BasicTransition}
    `};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Template = () => {
  const [keyframe, setKeyframe] = useState<KeyframeKey>('slideInLeft');

  const onClick = (value: KeyframeKey) => {
    setKeyframe(undefined);
    setTimeout(() => setKeyframe(value), 100);
  };

  return (
    <Layout>
      <BoxRange>{keyframe && <TransitionBox keyframe={keyframe} />}</BoxRange>
      <Buttons>
        <Button onClick={() => onClick('slideInLeft')} text="slideInLeft" />
        <Button onClick={() => onClick('slideInRight')} text="slideInRight" />
        <Button onClick={() => onClick('slideInUp')} text="slideInUp" />
        <Button onClick={() => onClick('slideInDown')} text="slideInDown" />
      </Buttons>
    </Layout>
  );
};

Template.storyName = 'Keyframe';
