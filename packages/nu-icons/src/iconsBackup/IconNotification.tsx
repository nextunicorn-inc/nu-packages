import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  size = '24',
  color = '#616161',
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
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
          d="M12 2C12.2761 2 12.5 2.22386 12.5 2.5L12.501 4.01791C15.9935 4.26936 18.7501 7.12428 18.8709 10.6346L18.875 10.8749V15.2799L18.9656 15.3106C19.4838 15.5126 19.8693 15.9717 19.9725 16.5262L19.9936 16.6797L20 16.8249V17.4999C20 18.2796 19.4051 18.9204 18.6445 18.9931L18.5 18.9999L15.874 18.9998C15.4301 20.7251 13.8639 22 12 22C10.1361 22 8.56991 20.7251 8.12595 18.9998L5.5 18.9999C4.7203 18.9999 4.07955 18.405 4.00687 17.6444L4 17.4999V16.8249C4 16.167 4.39099 15.6004 4.95328 15.3448L5.08598 15.2915L5.125 15.2789V10.8749C5.125 7.24608 7.93651 4.27389 11.5001 4.01782L11.5 2.5C11.5 2.22386 11.7239 2 12 2ZM14.8293 18.9999H9.17067C9.58249 20.1651 10.6937 21 12 21C13.3063 21 14.4175 20.1651 14.8293 18.9999ZM12.2199 5.00387L12.0072 4.99995L11.9902 4.99985C8.82832 5.00038 6.24485 7.51239 6.12905 10.6547L6.125 10.8749V15.6999C6.125 15.9454 5.94812 16.1495 5.71488 16.1919L5.53264 16.2067C5.26474 16.2464 5.05226 16.4561 5.00834 16.7225L5 16.8249V17.4999C5 17.7454 5.17688 17.9495 5.41012 17.9919L5.5 17.9999H18.5C18.7455 17.9999 18.9496 17.823 18.9919 17.5898L19 17.4999V16.8249C19 16.5407 18.8091 16.2978 18.5646 16.2249L18.4707 16.2058L18.3481 16.1992C18.1123 16.1865 17.9219 16.0118 17.8825 15.7866L17.875 15.6999V10.8749C17.875 7.78418 15.4838 5.23869 12.4434 5.01599L12.2199 5.00387Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.66666C10.2301 1.66666 10.4167 1.85321 10.4167 2.08333L10.4175 3.34825C13.3279 3.5578 15.6251 5.9369 15.7257 8.86216L15.7292 9.06243V12.7333L15.8047 12.7588C16.2365 12.9272 16.5577 13.3097 16.6438 13.7718L16.6613 13.8997L16.6667 14.0208V14.5833C16.6667 15.233 16.1709 15.767 15.537 15.8275L15.4167 15.8333L13.2284 15.8331C12.8584 17.2709 11.5533 18.3333 10 18.3333C8.44673 18.3333 7.14159 17.2709 6.77163 15.8331L4.58333 15.8333C3.93359 15.8333 3.39962 15.3375 3.33905 14.7036L3.33333 14.5833V14.0208C3.33333 13.4725 3.65915 13.0003 4.12773 12.7873L4.23831 12.7429L4.27083 12.7324V9.06243C4.27083 6.03839 6.61376 3.56158 9.58342 3.34818L9.58333 2.08333C9.58333 1.85321 9.76988 1.66666 10 1.66666ZM12.3578 15.8333H7.64223C7.9854 16.8043 8.91146 17.5 10 17.5C11.0885 17.5 12.0146 16.8043 12.3578 15.8333ZM10.1832 4.16989L10.006 4.16662L9.99183 4.16654C7.35693 4.16698 5.20404 6.26032 5.10754 8.87891L5.10417 9.06243V13.0833C5.10417 13.2878 4.95677 13.4579 4.7624 13.4932L4.61053 13.5056C4.38729 13.5386 4.21021 13.7134 4.17362 13.9355L4.16667 14.0208V14.5833C4.16667 14.7878 4.31406 14.9579 4.50844 14.9932L4.58333 14.9999H15.4167C15.6212 14.9999 15.7913 14.8525 15.8266 14.6582L15.8333 14.5833V14.0208C15.8333 13.7839 15.6743 13.5815 15.4705 13.5208L15.3922 13.5048L15.2901 13.4993C15.0936 13.4887 14.9349 13.3432 14.9021 13.1555L14.8958 13.0833V9.06243C14.8958 6.48682 12.9031 4.36558 10.3695 4.17999L10.1832 4.16989Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'notification');
export default IconComponent;