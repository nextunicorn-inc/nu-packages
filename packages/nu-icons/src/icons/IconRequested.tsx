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
          d="M12.2776 2.08988C12.1111 1.97004 11.8889 1.97004 11.7224 2.08988L11.6548 2.14857L8.893 5.01802L8.83044 5.0976C8.70531 5.29449 8.72617 5.56206 8.893 5.73539C9.06247 5.91147 9.32555 5.93104 9.51583 5.79408L9.58344 5.73539L11.511 3.731L11.5118 12.5118L11.5196 12.5995C11.561 12.8273 11.7603 13 12 13C12.2696 13 12.4882 12.7814 12.4882 12.5118L12.4886 3.73176L14.4166 5.73539L14.4842 5.79408C14.6507 5.91392 14.8729 5.91392 15.0394 5.79408L15.107 5.73539L15.1635 5.66514C15.2788 5.49215 15.2788 5.26126 15.1635 5.08828L15.107 5.01802L12.3452 2.14857L12.2776 2.08988ZM7.49794 4C7.77409 4 7.99794 4.22386 7.99794 4.5C7.99794 4.74546 7.82107 4.94961 7.58782 4.99194L7.49794 5H6.5C6.25454 5 6.05039 5.17688 6.00806 5.41012L6 5.5L6.00105 14.06C6.19077 14.1154 6.36861 14.208 6.52371 14.3333L6.63334 14.4312L8.08057 15.8563C8.15072 15.9253 8.23914 15.9717 8.33434 15.9905L8.43138 16H15.6055C15.7114 16 15.8138 15.9664 15.8985 15.9052L15.9585 15.8541L17.3794 14.4377C17.5513 14.2663 17.7604 14.1409 17.9877 14.0693L17.988 5.5C17.988 5.25454 17.8111 5.05039 17.5779 5.00806L17.488 5H16.5C16.2239 5 16 4.77614 16 4.5C16 4.25454 16.1769 4.05039 16.4101 4.00806L16.5 4H17.488C18.2677 4 18.9084 4.59489 18.9811 5.35554L18.988 5.5L18.9876 12.2931L19.0252 12.3213L19.0607 12.3536L20.8404 14.1337C20.9385 14.2249 21 14.3553 21 14.5V19.5C21 20.2797 20.4051 20.9204 19.6445 20.9931L19.5 21H4.5C3.7203 21 3.07955 20.4051 3.00687 19.6445L3 19.5V14.5C3 14.4538 3.00627 14.4091 3.018 14.3666C3.03865 14.2769 3.08356 14.1913 3.15355 14.1213L4.92132 12.3536C4.94587 12.329 4.97234 12.3075 5.00024 12.2892L5 5.5C5 4.7203 5.59489 4.07955 6.35554 4.00687L6.5 4H7.49794ZM5.58089 15H4V19.5C4 19.7455 4.17688 19.9496 4.41012 19.9919L4.5 20H19.5C19.7455 20 19.9496 19.8231 19.9919 19.5899L20 19.5V15H18.4384C18.3325 15 18.2301 15.0336 18.1454 15.0948L18.0854 15.1459L16.6646 16.5623C16.4185 16.8076 16.0962 16.9587 15.7535 16.9927L15.6055 17H8.43138C8.08679 17 7.75429 16.8814 7.48857 16.6667L7.37893 16.5688L5.93171 15.1437C5.86156 15.0747 5.77314 15.0283 5.67794 15.0095L5.58089 15Z"
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
const IconComponent = convertIcon<OverrideIconSize>(SvgComponent, 'requested');
export default IconComponent;
