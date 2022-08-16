import React, { ReactNode, CSSProperties, DetailedHTMLProps, ComponentType } from 'react';

export type IconSize = 'inherit' | 'extra-small' | 'small' | 'default' | 'large' | 'extra-large';

export interface IconProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  svg: ReactNode;
  size?: IconSize;
  spin?: boolean;
  rotate?: number;
  type?: string;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, rotate, style, type, size = 'default', ...restProps } = props;

  const outerStyle: CSSProperties = {};
  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  Object.assign(outerStyle, style);
  return (
    <span role="img" ref={ref} aria-label={type} style={outerStyle} {...restProps}>
      {svg}
    </span>
  );
});

// @ts-ignore used to judge whether it is a semi-icon in semi-ui
// custom icon case
Icon.elementType = 'Icon';

const convertIcon = (Svg: ComponentType, iconType: string) => {
  const InnerIcon = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'svg' | 'type'>>(
    (props, ref) => (
      <Icon svg={React.createElement(Svg)} type={iconType} ref={ref as any} {...props} />
    ),
  );
  // @ts-ignore used to judge whether it is a semi-icon in semi-ui
  // builtin icon case
  InnerIcon.elementType = 'Icon';
  return InnerIcon;
};

export { convertIcon };
export default Icon;
