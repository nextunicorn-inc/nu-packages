import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
  size,
  color = '#006EFF',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '24') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9537 11.0195C19.7423 10.8175 19.499 10.652 19.2336 10.5295L7.57367 4.78949C7.30102 4.63017 6.98407 4.56348 6.67035 4.59954C6.35663 4.6356 6.06307 4.77241 5.83368 4.98944C5.62103 5.23225 5.48328 5.53156 5.43714 5.85101C5.39099 6.17046 5.43843 6.49642 5.57367 6.78949L7.40369 11.2294C7.44577 11.3291 7.46741 11.4363 7.46741 11.5445C7.46741 11.6527 7.44577 11.7597 7.40369 11.8594L5.7237 16.8594C5.5804 17.1371 5.52378 17.4515 5.56122 17.7618C5.59866 18.072 5.7284 18.3639 5.93366 18.5995C6.04705 18.7142 6.18276 18.8045 6.3324 18.8647C6.48204 18.9249 6.64242 18.9537 6.80365 18.9495C7.08979 18.9457 7.3709 18.8736 7.62366 18.7394L19.2737 12.5495C19.537 12.4233 19.7797 12.2582 19.9937 12.0595C20.1375 11.9235 20.2235 11.7372 20.2336 11.5395C20.224 11.4385 20.1943 11.3405 20.1462 11.2512C20.0982 11.1618 20.0327 11.0831 19.9537 11.0195Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#006EFF
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'send-filled');
export default IconComponent;
