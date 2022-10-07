export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'angels-primary'
  | 'angels-secondary'
  | 'angels-tertiary';

export type ButtonColor = 'blue' | 'coral' | 'gray';

export type LoadingProps = {
  kind?: ButtonVariant | ButtonColor;
};
