import styled from '@emotion/styled';
import { Color } from '../@foundations';

// TODO: 클래스 제거해서 고도화하기
export const ToggleWrapper = styled.div`
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: transparent;

  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;

  /* 클래스 */
  &.nu-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  &.nu-toggle:hover:not(.nu-toggle--disabled) .nu-toggle-track {
    background-color: ${Color.blueGray3};
  }

  &.nu-toggle--checked .nu-toggle-track {
    background-color: ${Color.unicornBlue6};
  }

  &.nu-toggle--checked:hover:not(.nu-toggle--disabled) .nu-toggle-track {
    background-color: ${Color.unicornBlue7};
  }

  &.nu-toggle--checked .nu-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  &.nu-toggle--checked .nu-toggle-track-uncheck {
    opacity: 0;
  }

  &.nu-toggle--checked .nu-toggle-thumb {
    left: 14px;
  }

  &.nu-toggle--focus .nu-toggle-thumb {
    -webkit-box-shadow: 0 0 3px 2px #0099e0;
    -moz-box-shadow: 0 0 3px 2px #0099e0;
    box-shadow: 0 0 2px 3px #0099e0;
  }

  &.nu-toggle:active:not(.nu-toggle--disabled) .nu-toggle-thumb {
    -webkit-box-shadow: 0 0 5px 5px #0099e0;
    -moz-box-shadow: 0 0 5px 5px #0099e0;
    box-shadow: 0 0 5px 5px #0099e0;
  }
`;

export const ToggleArea = styled.div`
  width: 28px;
  height: 16px;
  padding: 0;
  border-radius: 16px;
  background-color: ${Color.blueGray2};

  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;

export const ToggleCheck = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
`;

export const ToggleUncheck = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
`;

export const ToggleCircle = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border: 1px solid ${Color.blueGray1};
  border-radius: 50%;
  background-color: ${Color.naturalGray0};

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
`;

export const ToggleInput = styled.input`
  border: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
