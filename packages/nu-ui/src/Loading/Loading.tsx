import React from 'react';
import * as Styled from './Loading.styled';


import type { LoadingProps } from './Loading.types';


const Loading = ({ kind }: LoadingProps) => (
  <Styled.DSLoadingWrapper>
    {kind === 'secondary' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'transparent', display: 'block' }}
        width="20px"
        height="20px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="38" stroke="#bcd8fe" strokeWidth="7" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#2581ff"
          strokeWidth="8"
          strokeLinecap="square"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2.6315789473684212s"
            values="0 50 50;180 50 50;720 50 50"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            dur="2.6315789473684212s"
            values="23.876104167282428 214.88493750554184;112.21768958622741 126.54335208659685;23.876104167282428 214.88493750554184"
            keyTimes="0;0.5;1"
          />
        </circle>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'transparent', display: 'block' }}
        width="20px"
        height="20px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="38" stroke="#bcd8fe" strokeWidth="7" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#fefefe"
          strokeWidth="8"
          strokeLinecap="square"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2.6315789473684212s"
            values="0 50 50;180 50 50;720 50 50"
            keyTimes="0;0.5;1"
          />
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            dur="2.6315789473684212s"
            values="23.876104167282428 214.88493750554184;112.21768958622741 126.54335208659685;23.876104167282428 214.88493750554184"
            keyTimes="0;0.5;1"
          />
        </circle>
      </svg>
    )}
  </Styled.DSLoadingWrapper>
);

export default Loading;
