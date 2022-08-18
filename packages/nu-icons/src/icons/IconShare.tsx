import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({
  color = '#595959',
  size,
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
          d="M12.4994 4.705L12.5 15.5012C12.5 15.7774 12.2761 16.0012 12 16.0012C11.7239 16.0012 11.5 15.7774 11.5 15.5012L11.4994 4.705L8.11091 8.09619L8.04167 8.15405C7.8468 8.28905 7.57737 8.26976 7.40381 8.09619C7.20854 7.90093 7.20854 7.58435 7.40381 7.38909L11.6779 3.11759L11.733 3.07719L11.8279 3.03041L11.8946 3.01113C11.9286 3.00384 11.9638 3 12 3L12.0742 3.00547L12.1277 3.01651L12.1943 3.03917L12.2707 3.07951C12.3001 3.09844 12.3279 3.12075 12.3536 3.14645L16.5962 7.38909L16.654 7.45833C16.789 7.6532 16.7698 7.92263 16.5962 8.09619L16.5269 8.15405C16.3321 8.28905 16.0627 8.26976 15.8891 8.09619L12.4994 4.705ZM9 11.5C9 11.2239 8.77614 11 8.5 11H5.5L5.35554 11.0069C4.59489 11.0796 4 11.7203 4 12.5V18.5L4.00687 18.6445C4.07955 19.4051 4.7203 20 5.5 20H18.5L18.6445 19.9931C19.4051 19.9204 20 19.2797 20 18.5V12.5L19.9931 12.3555C19.9204 11.5949 19.2797 11 18.5 11H15.5L15.4101 11.0081C15.1769 11.0504 15 11.2545 15 11.5C15 11.7761 15.2239 12 15.5 12H18.5L18.5899 12.0081C18.8231 12.0504 19 12.2545 19 12.5V18.5L18.9919 18.5899C18.9496 18.8231 18.7455 19 18.5 19H5.5L5.41012 18.9919C5.17688 18.9496 5 18.7455 5 18.5V12.5L5.00806 12.4101C5.05039 12.1769 5.25454 12 5.5 12H8.5L8.58988 11.9919C8.82312 11.9496 9 11.7455 9 11.5Z"
          fill={color}
        />
      </svg>
    );
  }

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

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.64644 2.14645C9.84171 1.95118 10.1583 1.95118 10.3536 2.14645L13.182 4.97487C13.3772 5.17014 13.3772 5.48672 13.182 5.68198C12.9867 5.87724 12.6701 5.87724 12.4749 5.68198L10.5 3.70711V12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5V3.7071L7.52512 5.68198C7.32986 5.87724 7.01328 5.87724 6.81802 5.68198C6.62275 5.48672 6.62275 5.17014 6.81802 4.97487L9.64644 2.14645ZM4 10.5C4 10.2239 4.22386 10 4.5 10H7C7.27614 10 7.5 9.77614 7.5 9.5C7.5 9.22386 7.27614 9 7 9H4.5C3.67157 9 3 9.67157 3 10.5V15.5C3 16.3284 3.67157 17 4.5 17H15.5C16.3284 17 17 16.3284 17 15.5V10.5C17 9.67157 16.3284 9 15.5 9H13C12.7239 9 12.5 9.22386 12.5 9.5C12.5 9.77614 12.7239 10 13 10H15.5C15.7761 10 16 10.2239 16 10.5V15.5C16 15.7761 15.7761 16 15.5 16H4.5C4.22386 16 4 15.7761 4 15.5V10.5Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'share');
export default IconComponent;
