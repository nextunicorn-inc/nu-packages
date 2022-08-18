import React from 'react';
import classNames from 'classnames';
import * as Styled from './Checkbox.styled';
import { ConfigContext, FormItemInputContext, GroupContext } from './Checkbox.context';
import CheckboxIconContainer from './Checkbox.icon';

import type { CheckboxProps } from './Checkbox.types';

const InternalCheckbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  {
    prefixCls: customizePrefixCls,
    className,
    children,
    indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    ...restProps
  },
  ref,
) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const checkboxGroup = React.useContext(GroupContext);
  const { isFormItemInput } = React.useContext(FormItemInputContext);

  const prevValue = React.useRef(restProps.value);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    checkboxGroup?.registerValue(restProps.value);
  }, []);

  React.useEffect(() => {
    if (skipGroup) {
      return;
    }
    if (restProps.value !== prevValue.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      checkboxGroup?.cancelValue(prevValue.current);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      checkboxGroup?.registerValue(restProps.value);
      prevValue.current = restProps.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,consistent-return
    return () => checkboxGroup?.cancelValue(restProps.value);
  }, [restProps.value]);

  const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  const checkboxProps: CheckboxProps = { ...restProps };
  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = (...args) => {
      if (restProps.onChange) {
        restProps.onChange(...args);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({ label: children, value: restProps.value });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }
  const classString = classNames(
    {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled,
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput,
    },
    className,
  );
  const checkboxClass = classNames({
    [`${prefixCls}-indeterminate`]: indeterminate,
  });
  const ariaChecked = indeterminate ? 'mixed' : undefined;

  return (
    <Styled.DSCheckboxWrapper
      className={classString}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      $disabled={checkboxProps.disabled}
    >
      <Styled.NUCheckbox
        aria-checked={ariaChecked}
        {...checkboxProps}
        prefixCls={prefixCls}
        className={checkboxClass}
        ref={ref}
      />
      <CheckboxIconContainer
        checkboxClass={checkboxClass}
        checked={!!checkboxProps.defaultChecked || !!checkboxProps.checked}
        disabled={!!checkboxProps.disabled}
      />
      {children !== undefined && <Styled.Span>{children}</Styled.Span>}
    </Styled.DSCheckboxWrapper>
  );
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(InternalCheckbox);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
