import React from 'react';
import * as Styled from './Chip.styled';

import type { ChipProps } from './Chip.types';

const CloseButton = ({ onClose }: { onClose: (args: never) => void }) => (
  <Styled.CloseButtonWrapper onClick={onClose} type="button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#C3C8D2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6569 6.34338C17.8668 6.55332 17.8668 6.89371 17.6569 7.10366L12.7603 12.0002L17.6569 16.8968C17.8668 17.1067 17.8668 17.4471 17.6569 17.6571C17.4469 17.867 17.1065 17.867 16.8966 17.6571L12 12.7605L7.10343 17.6571C6.89348 17.867 6.55309 17.867 6.34315 17.6571C6.1332 17.4471 6.1332 17.1067 6.34315 16.8968L11.2405 11.9995L6.34315 7.10366C6.1332 6.89371 6.1332 6.55332 6.34315 6.34338C6.55309 6.13343 6.89348 6.13343 7.10343 6.34338L12.0008 11.2392L16.8966 6.34338C17.1065 6.13343 17.4469 6.13343 17.6569 6.34338Z"
        fill="#FEFEFE"
      />
      <mask
        id="mask0_2747_48362"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="6"
        width="12"
        height="12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6569 6.34338C17.8668 6.55332 17.8668 6.89371 17.6569 7.10366L12.7603 12.0002L17.6569 16.8968C17.8668 17.1067 17.8668 17.4471 17.6569 17.6571C17.4469 17.867 17.1065 17.867 16.8966 17.6571L12 12.7605L7.10343 17.6571C6.89348 17.867 6.55309 17.867 6.34315 17.6571C6.1332 17.4471 6.1332 17.1067 6.34315 16.8968L11.2405 11.9995L6.34315 7.10366C6.1332 6.89371 6.1332 6.55332 6.34315 6.34338C6.55309 6.13343 6.89348 6.13343 7.10343 6.34338L12.0008 11.2392L16.8966 6.34338C17.1065 6.13343 17.4469 6.13343 17.6569 6.34338Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2747_48362)" />
    </svg>
  </Styled.CloseButtonWrapper>
);

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      text,
      closeable = false,
      onClose = () => {
        console.log();
      },
      style,
    },
    ref,
  ) => (
    <Styled.DSChipWrapper ref={ref} style={style}>
      <Styled.Text $closeable={closeable}>{text}</Styled.Text>
      {closeable && <CloseButton onClose={onClose} />}
    </Styled.DSChipWrapper>
  ),
);

export default React.memo(Chip);
