import type * as React from 'react';
import InternalRadio from './Radio';
import type { RadioProps } from './Radio.types';

export { default as RadioGroup } from './RadioGroup';
export * from './Radio.types';

type CompoundedComponent = React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLElement>
>;

export const Radio = InternalRadio as CompoundedComponent;
