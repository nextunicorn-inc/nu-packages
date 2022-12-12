import Styled from '@emotion/styled';
import ProgressBar from './ProgressBar';
import { Meta, Story } from '@storybook/react';
import { ProgressBarTypes } from './ProgressBar.types';
import Palette from '../Palette';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const ProgressBarCollection = Styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:10px;
  width: 600px;
`


const ButtonTemplate: Story<ProgressBarTypes> = () => {
  const ex1 = ['1','2','3','4'];
  const ex2 = ['1단계','2단계','3단계']
  const ex3 = ['검토중','결성 진행','완료']
 return( <ProgressBarCollection>
    <ProgressBar progressList={ex1} currentState={'1'} backgroundColor={Palette.Green90} completeColor={Palette.Red80} uncompletedColor={Palette.Black40}/>
     <ProgressBar progressList={ex2} currentState={'2단계'} backgroundColor={Palette.Blue50} completeColor={Palette.Orange70} uncompletedColor={Palette.Yellow30}/>
     <ProgressBar progressList={ex3} currentState={'결성 진행'}/>
  </ProgressBarCollection>
)
};

export const Default = ButtonTemplate.bind({});

