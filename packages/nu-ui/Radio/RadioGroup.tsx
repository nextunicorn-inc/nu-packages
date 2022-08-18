import React from 'react';
import { RadioChangeEvent, RadioGroupProps } from './Radio.types';
import { RadioGroupContextProvider } from './Radio.context';
import { ConfigContext } from '../Checkbox/Checkbox.context';
import { SizeType } from '../Checkbox';
import classNames from 'classnames';
import Radio from './Radio';

type Updater<T> = T | ((prevValue: T) => T);

export type SetState<T> = (
  nextValue: Updater<T>,
  /**
   * Will not update state when destroyed.
   * Developer should make sure this is safe to ignore.
   */
  ignoreDestroy?: boolean,
) => void;

function getDataOrAriaProps(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.keys(props).reduce((prev: any, key: string) => {
    if (
      (key.startsWith('data-') || key.startsWith('aria-') || key === 'role') &&
      !key.startsWith('data-__')
    ) {
      // eslint-disable-next-line no-param-reassign
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState<T>(defaultValue: T | (() => T)): [T, SetState<T>] {
  const destroyRef = React.useRef(false);
  const [value, setValue] = React.useState<T>(defaultValue);

  React.useEffect(() => {
    destroyRef.current = false;

    return () => {
      destroyRef.current = true;
    };
  }, []);

  function safeSetState(updater: Updater<T>, ignoreDestroy?: boolean) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }

    setValue(updater);
  }

  return [value, safeSetState];
}

const SizeContext = React.createContext<SizeType>(undefined);

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState<T, R = T>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T);
    value?: T;
    onChange?: (value: T, prevValue: T) => void;
    postState?: (value: T) => T;
  },
): [R, (value: T, ignoreDestroy?: boolean) => void] {
  const { defaultValue, value, onChange, postState } = option || {};
  const [innerValue, setInnerValue] = useSafeState<T>(() => {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? (defaultValue as any)() : defaultValue;
    }

    return typeof defaultStateValue === 'function'
      ? (defaultStateValue as any)()
      : defaultStateValue;
  });

  let mergedValue = value !== undefined ? value : innerValue;
  if (postState) {
    mergedValue = postState(mergedValue);
  }

  // setState
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  const triggerChange = React.useCallback(
    (newValue: T, ignoreDestroy?: boolean) => {
      setInnerValue(newValue, ignoreDestroy);
      if (mergedValue !== newValue && onChangeRef.current) {
        onChangeRef.current(newValue, mergedValue);
      }
    },
    [mergedValue, onChangeRef],
  );

  // Effect of reset value to `undefined`
  const prevValueRef = React.useRef(value);
  React.useEffect(() => {
    // console.log(value);
    if (value !== undefined && value !== prevValueRef.current) {
      setInnerValue(value);
    }

    prevValueRef.current = value;
  }, [value]);

  return [mergedValue as unknown as R, triggerChange];
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const size = React.useContext(SizeContext);

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });

  const onRadioChange = (ev: RadioChangeEvent) => {
    const lastValue = value;
    const val = ev.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    const { onChange } = props;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };

  const renderGroup = () => {
    const {
      prefixCls: customizePrefixCls,
      className = '',
      options,
      disabled,
      children,
      size: customizeSize,
      style,
      id,
      onMouseEnter,
      onMouseLeave,
    } = props;
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    let childrenToRender = children;
    // 如果存在 options, 优先使用
    if (options && options.length > 0) {
      childrenToRender = options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          // string 타입 유도
          return (
            <Radio
              key={option.toString()}
              prefixCls={prefixCls}
              disabled={disabled}
              value={option}
              checked={value === option}
            >
              {option}
            </Radio>
          );
        }
        // { label: string value: string } 으로 변형
        return (
          <Radio
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            key={`radio-group-value-options-${option.value}`}
            prefixCls={prefixCls}
            disabled={option.disabled || disabled}
            value={option.value}
            checked={value === option.value}
            style={option.style}
          >
            {option.label}
          </Radio>
        );
      });
    }

    const mergedSize = customizeSize || size;
    const classString = classNames(
      groupPrefixCls,
      `${groupPrefixCls}`,
      {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
        [`${groupPrefixCls}-rtl`]: direction === 'rtl',
      },
      className,
    );
    return (
      <div
        {...getDataOrAriaProps(props)}
        className={classString}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
        ref={ref}
      >
        {childrenToRender}
      </div>
    );
  };

  return (
    <RadioGroupContextProvider
      value={{
        onChange: onRadioChange,
        value,
        disabled: props.disabled,
        name: props.name,
      }}
    >
      {renderGroup()}
    </RadioGroupContextProvider>
  );
});

export default React.memo(RadioGroup);
