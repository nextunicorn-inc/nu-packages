import React from 'react';
import { convertIcon } from '../component/Icon';
interface OverrideIconSize24 {
  size: '24';
}
type OverrideIconSize = OverrideIconSize24;

const SvgComponent = ({
  size,
  color = '#616161',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4107 3.5575L3.91073 8.79149C3.33407 9.25584 3 9.948 3 10.6784V18.5556C3 19.9056 4.11929 21 5.5 21H18.5C19.8807 21 21 19.9056 21 18.5556V10.6784C21 9.948 20.6659 9.25584 20.0893 8.79149L13.5893 3.5575C12.6661 2.81417 11.3339 2.81417 10.4107 3.5575ZM12.9536 4.31228L19.4536 9.54627C19.7996 9.82487 20 10.2402 20 10.6784V18.5556C20 19.3656 19.3284 20.0222 18.5 20.0222H15.5V14.4444L15.4947 14.2837C15.41 13.0086 14.3255 12 13 12H11L10.8356 12.0052C9.53154 12.088 8.5 13.1484 8.5 14.4444V20.0222H5.5C4.67157 20.0222 4 19.3656 4 18.5556V10.6784C4 10.2402 4.20044 9.82487 4.54644 9.54627L11.0464 4.31228C11.6003 3.86628 12.3997 3.86628 12.9536 4.31228ZM9.5 20.0222H14.5V14.4444C14.5 13.6821 13.9051 13.0556 13.1445 12.9845L13 12.9778H11C10.2203 12.9778 9.57955 13.5594 9.50687 14.3032L9.5 14.4444V20.0222Z"
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
 * 사용가능한 사이즈는 24 입니다.
 * 20(디폴트)사이즈가 없으므로 size prop은 required 입니다.
 */
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'home');
export default IconComponent;
