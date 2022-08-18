import React, { CSSProperties, DetailedHTMLProps, ComponentType } from 'react';

export type IconSize<T = '20'> = { size?: '16' | '20' | '24' | '32' | '40' | T };

export interface IconProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    IconSize {
  svg: React.ReactElement;
  spin?: boolean;
  rotate?: number;
  type?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, rotate, style, type, color, size = 'default', ...restProps } = props;

  const svgComponent = React.cloneElement(svg, { color, size, style });

  const outerStyle: CSSProperties = {};
  if (Number.isSafeInteger(rotate)) outerStyle.transform = `rotate(${rotate}deg)`;
  Object.assign(outerStyle, style);

  return (
    <span role="img" ref={ref} aria-label={type} style={outerStyle} {...restProps}>
      {svgComponent}
    </span>
  );
});

// @ts-ignore
Icon.elementType = 'Icon';

const convertIcon = (Svg: ComponentType<IconSize>, iconType: string) => {
  const InnerIcon = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>(
    (props, ref) => (
      <Icon svg={React.createElement(Svg)} type={iconType} ref={ref as any} {...props} />
    ),
  );
  // @ts-ignore
  InnerIcon.elementType = 'Icon';
  return InnerIcon;
};

export { convertIcon };
export default Icon;
