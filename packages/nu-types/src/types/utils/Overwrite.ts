import { Diff } from './Diff';
import { Intersection } from './Intersection';

/**
 * Overwrite
 * @desc U 타입을 T 타입에 덮어 씌웁니다.
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NewProps = { age: string; other: string };
 *
 *   // Expect: { name: string; age: string; visible: boolean; }
 *   type ReplacedProps = Overwrite<Props, NewProps>;
 */
export type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>,
> = Pick<I, keyof I>;
