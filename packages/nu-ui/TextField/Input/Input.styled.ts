import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Color } from '../../@foundations';
import { IconBox } from '../../IconBox';

const inputSizeCSS = {
  large: `
    padding: 14px 12px;
    height: 48px;
  `,
  small: `
    padding: 10px 12px;
    height: 40px;
  `,
};

export const LabelWrapper = styled.div<{ $noLabel: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ $noLabel }) => ($noLabel ? 'flex-end' : 'space-between')};
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Color.naturalGray8};
`;

export const InnerLabel = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${Color.unicornBlue6};
`;

export const IconWrapper = styled(IconBox)`
  margin-left: 12px;
`;

export const DSInputWrapper = styled.div<{
  $width: string;
}>`
  width: ${({ $width }) => $width && $width};
  display: flex;
  flex-direction: column;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    box-shadow: 0 0 0 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const InputBorder = styled.div<{
  $isError: boolean;
  $isExistsValue: boolean;
  $disabled: boolean;
  $inputSize: 'large' | 'small';
  $isSearch: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  ${({ $inputSize }) => inputSizeCSS[$inputSize]};
  background-color: ${Color.naturalGray0};
  border: 1px solid ${Color.naturalGray3};
  ${({ $isExistsValue }) => $isExistsValue && `border: 1px solid ${Color.blueGray6}`};
  ${({ $isError }) => $isError && `border: 1px solid ${Color.coral6}`};
  border-radius: 5px;
  ${({ $disabled }) => $disabled && 'cursor: not-allowed;'};

  &:focus-within {
    ${({ $isError }) =>
      $isError ? `border: 1px solid ${Color.coral6}` : `border: 1px solid ${Color.unicornBlue6}`};
  }

  ${({ $isSearch }) =>
    $isSearch &&
    `
      span:hover {
      cursor: pointer;
    }`}

  svg {
    pointer-events: none;
  }

  :not(div:first-of-type) {
    margin-top: 6px;
  }
`;

export const Input = styled.input<{
  $disabled: boolean;
  $textAlignRight: boolean;
}>`
  width: 100%;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  opacity: 1;

  ${({ $textAlignRight }) => $textAlignRight && 'text-align: right'};
  ${({ $disabled }) => $disabled && 'cursor: not-allowed'};
  ${({ $disabled }) => css`
    background-color: ${Color.naturalGray0};
    color: ${$disabled ? Color.blueGray6 : Color.naturalGray7};

    &::placeholder {
      color: ${Color.naturalGray4} !important;
    }
  `};
`;

export const InputContents = styled.div`
  width: 100%;
`;

export const UnitText = styled.span`
  margin-right: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.naturalGray7};
`;

export const Description = styled.div`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${Color.naturalGray7};
`;
