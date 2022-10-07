import { DividerOnly, DividerWithChildren } from './Divider.styled';
import DividerProps from './Divider.types';

const Divider = ({ type, text, children, ...rest }: DividerProps) => {
  if (type === 'hr') return <DividerOnly {...rest} />;
  return <DividerWithChildren {...rest}>{children || text}</DividerWithChildren>;
};

export default Divider;
