import { NextRouter } from 'next/router';
import analytics from './analytics';
import { getPrefixRemovedObjectByKey, omitObjectByKeys } from '../../utils';

interface HTMLAllElement extends HTMLElement {
  disabled: boolean;
  readonly parentElement: HTMLAllElement | null;
}

const TARGET_TAG_NAME = ['A', 'BUTTON', 'INPUT', 'LI'];

const logEvent = (element: EventTarget | null, router: NextRouter): void => {
  if (!element) return;
  if (!(element instanceof HTMLElement || element instanceof SVGElement)) return;

  const typedElement = element as HTMLAllElement;
  if (typedElement.disabled) return;

  const {
    onclick: $onclick,
    tagName: $tag,
    dataset: $dataset,
    parentElement: $parent,
  } = typedElement;
  const $event = $dataset?.event;

  if ($onclick || TARGET_TAG_NAME.includes($tag)) {
    // eslint-disable-next-line consistent-return
    if (!$event) return logEvent(typedElement.parentElement, router);

    const eventProperties = {
      amp: getPrefixRemovedObjectByKey<any>($dataset, 'amp'),
      rest: omitObjectByKeys<any>($dataset, ['event', 'amp']),
    };
    // console.log($event, eventProperties);

    analytics.click({
      eventName: $event,
      eventProperties: { ...eventProperties.amp, ...eventProperties.rest },
      router,
    });
    return;
  }

  // eslint-disable-next-line consistent-return
  return $parent ? logEvent($parent, router) : undefined;
};

export default logEvent;
