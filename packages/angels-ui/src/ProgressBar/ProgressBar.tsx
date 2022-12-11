import Palette  from '../Palette';
import * as Styled from './ProgressBar.styled';

type progressBarTypes = {
  progressList: string[];
  currentState: string;
  backgroundColor?: string;
  completeColor?: string;
  uncompletedColor?: string;
};

const ProgressBar = ({
  progressList,
  currentState,
  backgroundColor,
  completeColor,
  uncompletedColor,
}: progressBarTypes) => {
  const currentProgressIdx = progressList.findIndex((progress) => progress === currentState);
  const isCompleted = (idx: number) => idx <= currentProgressIdx;
  return (
    <Styled.Wrapper $backgroundColor={backgroundColor}>
      {progressList.map((progress, idx) => (
        <Styled.StatusWrapper key={progress + idx}>
          <Styled.ProgressBar
            $backgroundColor={isCompleted(idx) ? completeColor : uncompletedColor}
          />
          <Styled.BottomStatusWrapper>
            {idx === currentProgressIdx ? (
              <Styled.CheckBoxWrapper>
                <Styled.CheckBoxCircle
                  $color={completeColor}
                  $backgroundColor={completeColor ?? Palette.ShineBlue70}
                />
              </Styled.CheckBoxWrapper>
            ) : isCompleted(idx) ? (
              <Styled.CheckBoxWrapper>
                <Styled.CheckBoxCircle $color={completeColor} />
                <Styled.CheckBoxKick $backgroundColor={completeColor} />
                <Styled.CheckBoxStem $backgroundColor={completeColor} />
              </Styled.CheckBoxWrapper>
            ) : (
              <Styled.CheckBoxWrapper>
                <Styled.CheckBoxCircle $color={uncompletedColor} />
              </Styled.CheckBoxWrapper>
            )}
            <Styled.StatusText
              $isCurrentState={idx == currentProgressIdx}
              $isCompleted={isCompleted(idx)}
            >
              {progress}
            </Styled.StatusText>
          </Styled.BottomStatusWrapper>
        </Styled.StatusWrapper>
      ))}
    </Styled.Wrapper>
  );
};

export default ProgressBar;
