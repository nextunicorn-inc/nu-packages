import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize32 {
  size: '32';
}
type OverrideIconSize = OverrideIconSize32;

const SvgComponent = ({
  size,
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & OverrideIconSize) => {
  if (size === '32') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM16.5 18.5012L16.4994 7.705L19.8891 11.0962C20.0627 11.2698 20.3321 11.289 20.5269 11.154L20.5962 11.0962C20.7698 10.9226 20.789 10.6532 20.654 10.4583L20.5962 10.3891L16.3536 6.14645C16.3279 6.12075 16.3001 6.09844 16.2707 6.07951L16.1943 6.03917L16.1277 6.01651L16.0742 6.00547L16 6C15.9638 6 15.9286 6.00384 15.8946 6.01113L15.8279 6.03041L15.733 6.07719L15.6779 6.11759L11.4038 10.3891C11.2085 10.5843 11.2085 10.9009 11.4038 11.0962C11.5774 11.2698 11.8468 11.289 12.0417 11.154L12.1109 11.0962L15.4994 7.705L15.5 18.5012C15.5 18.7774 15.7239 19.0012 16 19.0012C16.2761 19.0012 16.5 18.7774 16.5 18.5012ZM12.0172 14C12.2934 14 12.5172 14.2239 12.5172 14.5C12.5172 14.7455 12.3404 14.9496 12.1071 14.9919L12.0172 15H9.5C9.25454 15 9.05039 15.1769 9.00806 15.4101L9 15.5V21.5C9 21.7455 9.17688 21.9496 9.41012 21.9919L9.5 22H22.5C22.7455 22 22.9496 21.8231 22.9919 21.5899L23 21.5V15.5C23 15.2545 22.8231 15.0504 22.5899 15.0081L22.5 15H19.0367C18.7606 15 18.5367 14.7761 18.5367 14.5C18.5367 14.2545 18.7136 14.0504 18.9468 14.0081L19.0367 14H22.5C23.2797 14 23.9204 14.5949 23.9931 15.3555L24 15.5V21.5C24 22.2797 23.4051 22.9204 22.6445 22.9931L22.5 23H9.5C8.7203 23 8.07955 22.4051 8.00687 21.6445L8 21.5V15.5C8 14.7203 8.59489 14.0796 9.35554 14.0069L9.5 14H12.0172Z"
          fill={color}
        />
      </svg>
    );
  }
  return <div></div>;
};
/**
 * 컬러 주입 가능여부: 가능,
 * 기본컬러:#616161
 * 사용가능한 사이즈는 32 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'share-filled');
export default IconComponent;
