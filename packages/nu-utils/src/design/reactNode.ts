import { isValidElement, cloneElement as reactCloneElement } from 'react';
import { RenderProps } from '../@types/util';

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props: RenderProps,
): React.ReactNode {
  if (!isValidElement(element)) return replacement;

  return reactCloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}

export function cloneElement(element: React.ReactNode, props?: RenderProps): React.ReactElement {
  return replaceElement(element, element, props) as React.ReactElement;
}
