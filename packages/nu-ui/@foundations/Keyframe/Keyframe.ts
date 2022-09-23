import { keyframes } from '@emotion/react';
import type { KeyframeType } from './Keyframe.types';

export const Keyframe: KeyframeType = {
  slideInLeft: keyframes`
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    `,
  slideInRight: keyframes`
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    `,
  slideInUp: keyframes`
      from {
        opacity: 0;
        transform: translateY(-10%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  slideInDown: keyframes`
      from {
        opacity: 0;
        transform: translateY(10%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
  rotate: keyframes`
      100% {
        transform: rotate(360deg);
      }
  `,
  dash: keyframes`
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
  `,
};
