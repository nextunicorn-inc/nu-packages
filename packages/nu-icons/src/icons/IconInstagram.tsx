import React from 'react';
import { convertIcon, IconSize } from '../component/Icon';

function SvgComponent({ color = '#595959', ...rest }: React.SVGProps<SVGSVGElement> & IconSize) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM20.2713 12.69C20.8 12.69 21.2307 12.26 21.2307 11.73C21.2307 11.2007 20.8 10.77 20.2713 10.7707C19.742 10.7707 19.3107 11.2007 19.3107 11.73C19.3107 12.2593 19.7413 12.69 20.2713 12.69ZM13 16C13 17.6575 14.3425 19 16 19C17.6575 19 19 17.6575 19 16C19 14.3425 17.6575 13 16 13C14.3425 13 13 14.3425 13 16ZM11.892 16C11.892 13.732 13.7307 11.892 16 11.892C18.2687 11.892 20.108 13.73 20.108 16C20.108 18.268 18.2707 20.108 16 20.108C13.732 20.108 11.892 18.27 11.892 16ZM19.4438 9.06108C18.5459 9.02201 18.2747 9.01064 16.001 9.01064L15.969 8.98933C13.7259 8.98933 13.4335 8.99967 12.5608 9.03051L12.5198 9.03196C11.6893 9.07458 11.2413 9.2131 10.9432 9.33102C10.5393 9.47949 10.2617 9.67129 9.96428 9.96894C9.66543 10.268 9.47447 10.545 9.3254 10.95C9.20827 11.2483 9.07056 11.7058 9.02726 12.5369L9.02623 12.566C8.99509 13.4489 8.98467 13.7442 8.98467 15.99C8.98467 18.2379 8.99512 18.5307 9.02638 19.4063L9.02726 19.4311C9.07056 20.2622 9.20827 20.7197 9.3254 21.0188C9.47447 21.4137 9.66543 21.7014 9.96428 21.9991C10.2617 22.2974 10.5393 22.4786 10.9432 22.6377C11.2413 22.7549 11.6992 22.8934 12.5305 22.9361C13.4341 22.9787 13.7003 22.9893 15.9804 22.9893C18.2584 22.9893 18.5246 22.9801 19.4289 22.9389C20.2595 22.902 20.7174 22.762 21.0162 22.6462C21.4102 22.4914 21.6984 22.3074 21.9958 22.0097C22.294 21.71 22.4743 21.4265 22.6333 21.028C22.7504 20.7282 22.8888 20.2764 22.9321 19.4453C22.9747 18.5474 22.9847 18.2767 22.9847 16.0007C22.9847 13.7247 22.9754 13.4547 22.935 12.5554C22.8974 11.7243 22.7582 11.2732 22.6425 10.9734C22.4878 10.5742 22.3032 10.2907 22.0058 9.99238C21.7062 9.69473 21.4237 9.51004 21.0247 9.35589C20.7259 9.23796 20.2744 9.10015 19.4438 9.06108ZM12.7027 8.048C13.5553 8.01 13.8273 8 16 8C18.1733 8 18.4447 8.008 19.2987 8.048C20.1493 8.08733 20.73 8.222 21.2407 8.42C21.768 8.62333 22.2133 8.898 22.658 9.34267C23.102 9.78733 23.3767 10.234 23.58 10.76C23.7773 11.2693 23.912 11.8507 23.952 12.702C23.9907 13.5553 24 13.8267 24 16C24 18.1733 23.9927 18.4447 23.952 19.298C23.9127 20.1487 23.7773 20.73 23.58 21.24C23.3773 21.7673 23.102 22.2127 22.658 22.6573C22.2133 23.1013 21.766 23.376 21.2407 23.58C20.73 23.7773 20.1493 23.912 19.2987 23.952C18.4447 23.99 18.1733 24 16 24C13.8273 24 13.5553 23.992 12.7027 23.952C11.8507 23.9127 11.2707 23.7773 10.76 23.58C10.2333 23.3767 9.78733 23.1013 9.34267 22.6573C8.898 22.2127 8.624 21.7653 8.42 21.24C8.222 20.73 8.088 20.1487 8.048 19.298C8.01 18.4447 8 18.1733 8 16C8 13.8267 8.00867 13.5553 8.048 12.702C8.08733 11.85 8.222 11.27 8.42 10.76C8.62333 10.2333 8.898 9.78733 9.34267 9.34267C9.78733 8.898 10.234 8.624 10.76 8.42C11.27 8.222 11.85 8.088 12.7027 8.048Z"
        fill={color}
      />
    </svg>
  );
}

const IconComponent = convertIcon(SvgComponent, 'instagram');
export default IconComponent;