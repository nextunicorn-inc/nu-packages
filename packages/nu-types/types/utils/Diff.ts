import { SetDifference } from './SetDifference';

/**
 * Diff
 * @desc U 타입에 존재하지 않는 프로퍼티는 T 타입에서 제거됩니다.
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { name: string; visible: boolean; }
 *   type DiffProps = Diff<Props, DefaultProps>;
 */
export type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>;
