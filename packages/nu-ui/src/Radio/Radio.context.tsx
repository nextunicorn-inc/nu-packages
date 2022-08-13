import * as React from 'react';
import type { DisabledContextProps, DisabledType, RadioGroupContextProps } from './Radio.types';

const DisabledContext = React.createContext<DisabledType>(false);

export const DisabledContextProvider: React.FC<DisabledContextProps> = ({ children, disabled }) => {
  const originDisabled = React.useContext(DisabledContext);
  return (
    <DisabledContext.Provider value={disabled || originDisabled}>
      {children}
    </DisabledContext.Provider>
  );
};

export const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default DisabledContext;
