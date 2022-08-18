import { DisableProps } from '@nextunicorn/types';
import { Color } from '../@foundations';
import { IconContainer } from './Radio.styled';

export const DeselectedIcon = ({ disabled }: DisableProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z"
      fill={disabled ? `${Color.naturalGray3}` : '#595959'}
    />
  </svg>
);

export const SelectedIcon = ({ disabled }: DisableProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z"
      fill={disabled ? `${Color.blueGray3}` : '#006CFF'}
    />
  </svg>
);

export const RadioIconContainer = ({
  checked,
  disabled,
}: {
  checked: boolean;
  disabled: boolean;
}) => (
  <IconContainer className={checked ? 'radio-checked' : ''}>
    {/* eslint-disable-next-line no-nested-ternary */}
    {checked ? <SelectedIcon disabled={disabled} /> : <DeselectedIcon disabled={disabled} />}
  </IconContainer>
);
