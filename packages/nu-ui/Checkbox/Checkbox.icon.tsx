import { IconContainer } from './Checkbox.styled';
import { DisableProps } from '@nextunicorn/types';
import { Color } from '../@foundations';

export const DeselectedIcon = ({ disabled }: DisableProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3ZM5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5Z"
      fill={disabled ? `${Color.naturalGray3}` : '#616161'}
    />
  </svg>
);

export const SelectedIcon = ({ disabled }: DisableProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="16"
      height="16"
      rx="3"
      fill={disabled ? `${Color.blueGray3}` : '#006CFF'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7672 7.07952C13.9769 7.2119 14.0538 7.4698 13.9614 7.68754L13.9187 7.76698L10.2858 13.2723C10.1319 13.5057 9.81786 13.5662 9.58748 13.4235L9.51411 13.3684L6.16392 10.3494C5.95741 10.1633 5.94425 9.8487 6.13452 9.64673C6.30364 9.46719 6.57658 9.43707 6.78018 9.56329L6.85294 9.61797L9.7583 12.2363L13.0643 7.22768C13.2166 6.99693 13.5313 6.9306 13.7672 7.07952Z"
      fill={disabled ? `${Color.naturalGray0}` : '#FEFEFE'}
    />
  </svg>
);

export const IndeterminateIcon = ({ disabled }: DisableProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V5C17 3.89543 16.1046 3 15 3ZM5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5Z"
      fill={disabled ? `${Color.naturalGray3}` : '#616161'}
    />
    <rect
      x="6"
      y="9.5"
      width="8"
      height="1"
      rx="0.5"
      fill={disabled ? `${Color.naturalGray3}` : '#616161'}
    />
  </svg>
);

const CheckboxIconContainer = ({
  checkboxClass,
  checked,
  disabled,
}: {
  checkboxClass: string;
  checked: boolean;
  disabled: boolean;
}) => (
  <IconContainer className={checked ? 'checkbox-checked' : ''}>
    {/* eslint-disable-next-line no-nested-ternary */}
    {checkboxClass === 'checkbox-indeterminate' ? (
      <IndeterminateIcon disabled={disabled} />
    ) : checked ? (
      <SelectedIcon disabled={disabled} />
    ) : (
      <DeselectedIcon disabled={disabled} />
    )}
  </IconContainer>
);

export default CheckboxIconContainer;
