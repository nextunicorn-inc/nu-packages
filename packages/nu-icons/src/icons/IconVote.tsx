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
          d="M10.7855 4.29998L7.87026 8.17774C7.79201 8.28449 7.71874 8.39438 7.65058 8.50703C7.37542 8.18024 6.96212 7.97242 6.5 7.97242H3.5C2.67157 7.97242 2 8.64029 2 9.46414V19.409C2 20.2328 2.67157 20.9007 3.5 20.9007H6.5C7.03002 20.9007 7.49583 20.6273 7.76264 20.2146C8.20373 20.6397 8.80085 20.9007 9.45824 20.9007L17.0352 21C18.5281 21 19.8508 20.0265 20.3099 18.5898L21.8809 13.6741C21.9598 13.4271 22 13.1691 22 12.9095C22 11.5364 20.8994 10.4233 19.5418 10.4233L16.8119 10.324C16.5404 10.324 16.3202 10.1014 16.3202 9.82674V5.95705C16.3202 4.63254 15.4464 3.4708 14.1843 3.11734C12.9186 2.76285 11.5676 3.23291 10.7855 4.29998ZM8 18.6397C8.10737 19.3567 8.71935 19.9062 9.45824 19.9062L17.0352 20.0055C18.1016 20.0055 19.0463 19.3102 19.3743 18.2839L20.9452 13.3683C20.9926 13.22 21.0167 13.0652 21.0167 12.9095C21.0167 12.0856 20.3563 11.4178 19.5418 11.4178L16.8119 11.3185C15.9973 11.3185 15.3369 10.6506 15.3369 9.82674V5.95705C15.3369 5.07957 14.758 4.30992 13.9219 4.07575L13.7575 4.0365C12.933 3.8732 12.0816 4.20159 11.5754 4.89224L8.66016 8.76999C8.28818 9.27746 8.06105 9.87591 8 10.5003V18.6397ZM7 10.8429V9.46414C7 9.18953 6.77614 8.9669 6.5 8.9669H3.5C3.22386 8.9669 3 9.18953 3 9.46414V19.409C3 19.6836 3.22386 19.9062 3.5 19.9062H6.5C6.77614 19.9062 7 19.6836 7 19.409V18.4145V10.8429Z"
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
        d="M11.8546 3.11089L12.2015 3.22455C13.1005 3.51913 13.7071 4.34766 13.7071 5.28104V8.41458H14.8C16.015 8.41458 17 9.3849 17 10.5818C17 10.7832 16.9715 10.9836 16.9154 11.1772L15.9725 14.4281C15.7026 15.3585 14.8394 16 13.8571 16H7.1C6.88675 16 6.68767 15.9402 6.5191 15.8367C6.36778 15.9403 6.19008 16 6 16H4C3.44772 16 3 15.4963 3 14.875V8.125C3 7.50368 3.44772 7 4 7H6C6.30519 7 6.57844 7.1538 6.76187 7.39626L9.44236 3.8135C10.0178 3.10488 10.9805 2.82448 11.8546 3.11089ZM7 8.76893V14.875V15H13.8571C14.3036 15 14.7009 14.7349 14.8708 14.3372L14.9148 14.2141L15.9577 10.8795C15.9858 10.7827 16 10.6825 16 10.5818C16 10.0261 15.5754 9.5681 15.0283 9.5055L14.9 9.49821H13.6071C13.0549 9.49821 12.6071 9.0505 12.6071 8.49821V5.21859C12.6071 4.79433 12.3565 4.41339 11.9732 4.23697L11.8543 4.19034L11.5074 4.07668C11.1141 3.9478 10.6849 4.04847 10.4125 4.30339L10.3278 4.39397L7 8.76893ZM6 14.9164V8.41458V8H4V15H6V14.9164Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'vote');
export default IconComponent;
