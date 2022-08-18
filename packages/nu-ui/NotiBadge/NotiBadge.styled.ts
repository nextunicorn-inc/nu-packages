import styled from '@emotion/styled';
import { Color } from '../@foundations';

export const DSNotiBadgeWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const Notification = styled.span<{
  $size: 'large' | 'small';
  $color: 'blue' | 'red';
  $content: boolean;
}>`
  ${({ $size, $content }) =>
    $size === 'large'
      ? `
        width: ${$content ? '20px' : '8px'};
        height: ${$content ? '19px' : '8px'};
        padding: ${$content ? '0 6px' : '0'};
        font-size: 12px;
        line-height: 18px;
        top: ${$content ? '-10px' : '-3px'};
        right: ${$content ? '-10px' : '-3px'};`
      : `
        width: ${$content ? '16px' : '6px'};
        height: ${$content ? '15px' : '6px'};
        padding: ${$content ? '1px 5px 0px 5px' : '0'};
        font-size: 10px;
        line-height: 14px;
        top: ${$content ? '-7px' : '-1px'};
        right: ${$content ? '-7px' : '-1px'};`};
  ${({ $content }) => ($content ? 'border-radius: 5px;' : 'border-radius: 50%;')}
  text-align: center;
  font-weight: 700;
  position: absolute;
  background-color: ${({ $color }) => ($color === 'blue' ? Color.unicornBlue6 : Color.coral6)};
  color: white;
`;
