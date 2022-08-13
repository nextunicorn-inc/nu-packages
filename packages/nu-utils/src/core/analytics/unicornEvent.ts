import { getEnsureFingerprint } from '../auth';
import debounce from 'lodash/debounce';
import unicornEventQueue from './unicornEventQueue';

getEnsureFingerprint();

const debounceSend = debounce(() => unicornEventQueue.flush());

const unicornEvent = (event: any) => {
  unicornEventQueue.push(event);
  debounceSend();
};

export default unicornEvent;
