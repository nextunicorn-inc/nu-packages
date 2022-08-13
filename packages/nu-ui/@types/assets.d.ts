declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

  const src: (props: SVGProps<SVGElement>) => ReactElement;
  export default src;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}
