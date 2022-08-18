import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#595959',
  size,
  ...rest
}: React.SVGProps<SVGSVGElement> & IconSize) {
  if (size === '40') {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.5714 3H11.0714C8.81985 3 7 4.86838 7 7.16667V32.8333C7 35.1316 8.81985 37 11.0714 37H28.9286C31.1801 37 33 35.1316 33 32.8333V13V12.6667C33 12.5363 32.9491 12.4112 32.8582 12.3178L23.9296 3.15113C23.8355 3.0545 23.7063 3 23.5714 3ZM31.6396 12.5L24 4.65609V11.2C24 11.8731 24.5115 12.4267 25.1671 12.4933L25.3 12.5H31.6396ZM23 4H11.0714C9.37811 4 8 5.41486 8 7.16667V32.8333C8 34.5851 9.37811 36 11.0714 36H28.9286C30.6219 36 32 34.5851 32 32.8333V13.5H25.3C24.0827 13.5 23.0862 12.5543 23.0053 11.3575L23 11.2V4ZM16.5 18V27H15V18H16.5ZM21.4186 18C21.8525 18 22.2603 18.0429 22.6419 18.1286C23.0235 18.2144 23.3546 18.3586 23.6352 18.5612C23.9158 18.7639 24.1365 19.0329 24.2974 19.368C24.4582 19.7032 24.5387 20.1203 24.5387 20.6192C24.5387 21.2739 24.3946 21.804 24.1066 22.2094C23.8665 22.5471 23.5602 22.8119 23.1877 23.0035L22.9562 23.1097L25 27H23.1775L21.34 23.3786H20.184V27H18.523V18H21.4186ZM20.184 19.368H21.2614C21.8002 19.368 22.2098 19.4596 22.4904 19.6428C22.771 19.826 22.9113 20.1514 22.9113 20.6192C22.9113 21.0869 22.771 21.4357 22.4904 21.6656C22.2098 21.8956 21.8002 22.0106 21.2614 22.0106H20.184V19.368Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0115 3.09793C18.926 3.03474 18.822 3 18.7143 3H9.21429L9.03164 3.0052C7.33911 3.10179 6 4.5324 6 6.27778V25.7222L6.00508 25.908C6.09947 27.6296 7.49777 29 9.21429 29H22.7857L22.9684 28.9948C24.6609 28.8982 26 27.4676 26 25.7222V10.4444L25.9906 10.3479C25.9719 10.2531 25.9261 10.1651 25.8576 10.095L19.0719 3.15056L19.0115 3.09793ZM9.21429 4H18V9.2L18.006 9.34763C18.0811 10.2727 18.8556 11 19.8 11H25V25.7222L24.9949 25.8785C24.9168 27.0658 23.9552 28 22.7857 28H9.21429L9.06298 27.9948C7.91288 27.9148 7 26.9302 7 25.7222V6.27778L7.00512 6.12153C7.08323 4.93424 8.04484 4 9.21429 4ZM13.6537 15V21H12.5V15H13.6537ZM17.8608 15.0857C17.5958 15.0286 17.3125 15 17.0111 15H15V21H16.1537V18.5857H16.9566L18.2328 21H19.4986L18.0791 18.4065L18.2398 18.3357C18.4986 18.2079 18.7113 18.0314 18.8781 17.8062C19.0781 17.536 19.1782 17.1826 19.1782 16.7461C19.1782 16.4135 19.1223 16.1355 19.0106 15.912C18.8988 15.6886 18.7455 15.5093 18.5507 15.3742C18.3558 15.239 18.1258 15.1429 17.8608 15.0857ZM16.902 15.912H16.1537V17.6737H16.902C17.2762 17.6737 17.5607 17.5971 17.7556 17.4438C17.9504 17.2905 18.0479 17.0579 18.0479 16.7461C18.0479 16.4343 17.9504 16.2173 17.7556 16.0952C17.5607 15.9731 17.2762 15.912 16.902 15.912ZM19 9.2V4.508L24.367 10H19.8L19.6996 9.99377C19.3052 9.9444 19 9.60784 19 9.2Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'file-IR');
export default IconComponent;
