import type { ReactElement, ReactNode } from 'react';

type ResponsiveSectionProps = {
  className: string;
  children: ReactNode;
};

export type ResponsiveSectionType = (
  props: ResponsiveSectionProps,
) => ReactElement<ResponsiveSectionProps>;
