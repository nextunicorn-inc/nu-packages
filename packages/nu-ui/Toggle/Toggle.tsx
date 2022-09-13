// import { useEffect, useRef, useState } from 'react';
// import classNames from 'classnames';
// import * as Styled from './Toggle.styled';
// import { PointerCoordinates, ToggleProps } from './Toggle.types';
//
// function usePrevious<T>(value: T): T {
//   const ref = useRef<T>();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
//
// function pointerCoord(ev: any): PointerCoordinates {
//   if (!ev) return { x: 0, y: 0 };
//
//   const changedTouches = ev.changedTouches;
//   if (changedTouches && changedTouches.length > 0) {
//     const touch = changedTouches[0];
//     return { x: touch.clientX, y: touch.clientY };
//   }
//
//   const pageX = ev.pageX;
//   if (pageX !== undefined) return { x: pageX, y: ev.pageY };
// }
//
// const Toggle = ({
//   checked = false,
//   defaultChecked,
//   disabled,
//   onFocus,
//   onBlur,
//   ...rest
// }: ToggleProps) => {
//   let prevChecked = usePrevious(!!(checked || defaultChecked));
//   const inputRef = useRef<HTMLInputElement>(null);
//
//   const [localChecked, setLocalChecked] = useState(!!(checked || defaultChecked));
//   const [hasFocus, setFocus] = useState(false);
//   const [moved, setMoved] = useState(false);
//   const [startX, setStartX] = useState<number | null>(null);
//   const [activated, setActivated] = useState(false);
//
//   useEffect(() => {
//     if (prevChecked !== checked) setLocalChecked(!!checked);
//   }, [prevChecked, checked]);
//
//   const handleClick = (event) => {
//     if (disabled) return;
//
//     event.preventDefault();
//
//     const checkbox = inputRef.current;
//     if (event.target !== checkbox && !moved) {
//       prevChecked = checkbox.checked;
//       checkbox.focus();
//       checkbox.click();
//       return;
//     }
//
//     setLocalChecked(checked ? checked : checkbox.checked);
//   };
//
//   const handleTouchStart = (event) => {
//     if (disabled) return;
//
//     setStartX(pointerCoord(event).x);
//     setActivated(true);
//   };
//
//   const handleTouchMove = (event) => {
//     if (!activated) return;
//     setMoved(true);
//
//     if (!startX) return;
//
//     const currentX = pointerCoord(event).x;
//     if (localChecked && currentX + 15 < startX) {
//       setLocalChecked(false);
//       setStartX(currentX);
//       setActivated(true);
//     } else if (currentX - 15 > startX) {
//       setLocalChecked(true);
//       setStartX(currentX);
//       setActivated(currentX < startX + 5);
//     }
//   };
//
//   const handleTouchEnd = (event) => {
//     if (!moved) return;
//     const checkbox = inputRef.current;
//     event.preventDefault();
//
//     if (startX) return;
//
//     const endX = pointerCoord(event).x;
//     if (prevChecked && startX + 4 > endX && prevChecked !== localChecked) {
//       setLocalChecked(false);
//       prevChecked = localChecked;
//       checkbox.click();
//     } else if (startX - 4 < endX && prevChecked !== localChecked) {
//       setLocalChecked(true);
//       prevChecked = localChecked;
//       checkbox.click();
//     }
//
//     setActivated(false);
//     setStartX(null);
//     setMoved(false);
//   };
//
//   const handleFocus = (event) => {
//     if (onFocus) {
//       onFocus(event);
//     }
//     setFocus(true);
//   };
//
//   const handleBlur = (event) => {
//     if (onBlur) {
//       onBlur(event);
//     }
//
//     setFocus(false);
//   };
//
//   const { className, ...inputProps } = rest;
//   const classes = classNames(
//     'nu-toggle',
//     {
//       'nu-toggle--checked': localChecked,
//       'nu-toggle--focus': hasFocus,
//       'nu-toggle--disabled': disabled,
//     },
//     className,
//   );
//
//   return (
//     <Styled.ToggleWrapper
//       className={classes}
//       onClick={handleClick}
//       // $checked={localChecked}
//       // $focus={hasFocus}
//       // $disabled={disabled}
//       // onTouchStart={handleTouchStart}
//       // onTouchMove={handleTouchMove}
//       // onTouchEnd={handleTouchEnd}
//     >
//       <Styled.ToggleArea className="nu-toggle-track">
//         <Styled.ToggleCheck className="nu-toggle-track-check">
//           {/* 체크 시 아이콘 영역 */}
//         </Styled.ToggleCheck>
//         <Styled.ToggleUncheck className="nu-toggle-track-uncheck">
//           {/* 미체크 시 아이콘 영역 */}
//         </Styled.ToggleUncheck>
//       </Styled.ToggleArea>
//       <Styled.ToggleCircle className="nu-toggle-thumb" />
//
//       <Styled.ToggleInput
//         {...inputProps}
//         ref={inputRef}
//         // onFocus={handleFocus}
//         // onBlur={handleBlur}
//         checked={localChecked}
//         type="checkbox"
//       />
//     </Styled.ToggleWrapper>
//   );
// };
//
// export default Toggle;
import { Component } from 'react';
import classNames from 'classnames';
import * as Styled from './Toggle.styled';
import { PointerCoordinates, ToggleProps } from './Toggle.types';

const Check = () => (
  <svg width="14" height="11" viewBox="0 0 14 11">
    <path
      d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

const X = () => (
  <svg width="10" height="10" viewBox="0 0 10 10">
    <path
      d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

function pointerCoord(ev: any): PointerCoordinates {
  if (!ev) return { x: 0, y: 0 };

  const changedTouches = ev.changedTouches;
  if (changedTouches && changedTouches.length > 0) {
    const touch = changedTouches[0];
    return { x: touch.clientX, y: touch.clientY };
  }

  const pageX = ev.pageX;
  if (pageX !== undefined) return { x: pageX, y: ev.pageY };
}

export default class Toggle extends Component<
  ToggleProps,
  { checked: boolean; hasFocus: boolean }
> {
  previouslyChecked: boolean;
  input: HTMLInputElement;
  moved: boolean;
  startX: number;
  endX: number;
  activated: boolean;
  static displayName: string;
  static defaultProps: any;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.previouslyChecked = !!(props.checked || props.defaultChecked);
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: !!this.props.checked });
    }
  }

  handleClick(event) {
    if (this.props.disabled) {
      return;
    }
    const checkbox = this.input;
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked;
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    const checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

    this.setState({ checked });
  }

  handleTouchStart(event) {
    if (this.props.disabled) {
      return;
    }
    this.startX = pointerCoord(event).x;
    this.activated = true;
  }

  handleTouchMove(event) {
    if (!this.activated) return;
    this.moved = true;

    if (this.startX) {
      const currentX = pointerCoord(event).x;
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false });
        this.startX = currentX;
        this.activated = true;
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true });
        this.startX = currentX;
        this.activated = currentX < this.startX + 5;
      }
    }
  }

  handleTouchEnd(event) {
    if (!this.moved) return;
    const checkbox = this.input;
    event.preventDefault();

    if (this.startX) {
      const endX = pointerCoord(event).x;
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false });
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true });
          this.previouslyChecked = this.state.checked;
          checkbox.click();
        }
      }

      this.activated = false;
      this.startX = null;
      this.moved = false;
    }
  }

  handleFocus(event) {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState({ hasFocus: true });
  }

  handleBlur(event) {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.setState({ hasFocus: false });
  }

  getIcon(type) {
    const { icons } = this.props;
    if (!icons) {
      return null;
    }
    return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
  }

  render() {
    const { className, icons: _icons, ...inputProps } = this.props;
    const classes = classNames(
      'nu-toggle',
      {
        'nu-toggle--checked': this.state.checked,
        'nu-toggle--focus': this.state.hasFocus,
        'nu-toggle--disabled': this.props.disabled,
      },
      className,
    );

    return (
      <Styled.ToggleWrapper
        className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <Styled.ToggleArea className="nu-toggle-track">
          <Styled.ToggleCheck className="nu-toggle-track-check">
            {/* 체크 시 아이콘 영역 */}
          </Styled.ToggleCheck>
          <Styled.ToggleUncheck className="nu-toggle-track-uncheck">
            {/* 미체크 시 아이콘 영역 */}
          </Styled.ToggleUncheck>
        </Styled.ToggleArea>
        <Styled.ToggleCircle className="nu-toggle-thumb" />

        <Styled.ToggleInput
          {...inputProps}
          ref={(ref) => {
            this.input = ref;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="nu-toggle-screenreader-only"
          type="checkbox"
        />
      </Styled.ToggleWrapper>
    );
  }
}

Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: <Check />,
    unchecked: <X />,
  },
};
