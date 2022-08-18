import React from 'react';
import * as Styled from './Radio.styled';
import { RadioChangeEvent, RadioProps } from './Radio.types';
import { ConfigContext, FormItemInputContext } from '../Checkbox/Checkbox.context';
import DisabledContext, { RadioGroupContext } from './Radio.context';
import classNames from 'classnames';
import { RadioIconContainer } from './Radio.icon';

export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    // eslint-disable-next-line no-param-reassign
    (ref as any).current = node;
  }
}

export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  const refList = refs.filter((ref) => ref);
  if (refList.length <= 1) return refList[0];
  return (node: T) => refs.forEach((ref) => fillRef(ref, node));
}

const InternalRadio: React.ForwardRefRenderFunction<HTMLElement, RadioProps> = (props, ref) => {
  const groupContext = React.useContext(RadioGroupContext);
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);
  const { isFormItemInput } = React.useContext(FormItemInputContext);

  const onChange = (e: RadioChangeEvent) => {
    props.onChange?.(e);
    groupContext?.onChange?.(e);
  };

  const {
    prefixCls: customizePrefixCls,
    className,
    children,
    style,
    disabled: customDisabled,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('radio', customizePrefixCls);

  const radioProps: RadioProps = { ...restProps };

  const disabled = React.useContext(DisabledContext);
  radioProps.disabled = customDisabled || disabled;

  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }
  const wrapperClassString = classNames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
      [`${prefixCls}-wrapper-rtl`]: direction === 'rtl',
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
    },
    className,
  );

  return (
    <Styled.DSRadioWrapper
      className={wrapperClassString}
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      $disabled={radioProps.disabled}
      $checked={!!radioProps.defaultChecked || !!radioProps.checked}
    >
      <Styled.NURadio {...radioProps} type="radio" prefixCls={prefixCls} ref={mergedRef} />
      <RadioIconContainer
        checked={!!radioProps.defaultChecked || !!radioProps.checked}
        disabled={!!radioProps.disabled}
      />
      {children !== undefined && <Styled.Span>{children}</Styled.Span>}
    </Styled.DSRadioWrapper>
  );
};

const Radio = React.forwardRef<HTMLElement, RadioProps>(InternalRadio);

Radio.displayName = 'Radio';

export default Radio;
