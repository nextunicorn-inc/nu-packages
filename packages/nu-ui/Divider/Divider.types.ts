import React from 'react';
import { ReactStandardProps } from '@nextunicorn/types';

type DividerOptions = {
  type?: 'hr';
  text?: string;
};

export default interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ReactStandardProps,
    DividerOptions {}
