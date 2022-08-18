import { StyleProps } from '@nextunicorn/types';

type ChipOptions = {
  text?: string;
  closeable?: boolean;
  onClose?: () => void;
};

export interface ChipProps extends StyleProps, ChipOptions {}
