import { DividerOnly, DividerWithChildren } from './Divider.styled';
import DividerProps from './Divider.types';

const Divider = ({ type, text, children }: DividerProps) => {
  if (type === 'hr') return <DividerOnly />;
  return <DividerWithChildren>{children || text}</DividerWithChildren>;
};

export default Divider;
