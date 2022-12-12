import Styled from '@emotion/styled';
import ProgressIndicator from './ProgressIndicator';
import { Meta, Story } from '@storybook/react';
import { ProgressIndicatorTypes } from './ProgressIndicator.types';
import Palette from '../Palette';

export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const ProgressIndicatorCollection = Styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:10px;
  width: 600px;
`


const ProgressIndicatorTemplate: Story<ProgressIndicatorTypes> = () => {
  const ex1 = ['1','2','3','4'];
  const ex2 = ['1단계','2단계','3단계']
  const ex3 = ['검토중','결성 진행','완료']
 return( <ProgressIndicatorCollection>
    <ProgressIndicator progressList={ex1} currentState={'1'} backgroundColor={Palette.Green90} completeColor={Palette.Red80} uncompletedColor={Palette.Black40}/>
     <ProgressIndicator progressList={ex2} currentState={'2단계'} backgroundColor={Palette.Blue50} completeColor={Palette.Orange70} uncompletedColor={Palette.Yellow30}/>
     <ProgressIndicator progressList={ex3} currentState={'결성 진행'}/>
  </ProgressIndicatorCollection>
)
};

export const Default = ProgressIndicatorTemplate.bind({});

