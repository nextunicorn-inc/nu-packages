import { StyleProps } from '@nextunicorn-inc/nu-types';

type ChipOptions = {
  text?: string;
  closeable?: boolean;
  onClose?: () => void;
};

export interface ChipProps extends StyleProps, ChipOptions {}
