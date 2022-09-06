import { ReactStandardProps } from '@nextunicorn/types';

type ChipOptions = {
  text?: string;
  closeable?: boolean;
  onClose?: () => void;
};

export interface ChipProps extends ReactStandardProps, ChipOptions {}
