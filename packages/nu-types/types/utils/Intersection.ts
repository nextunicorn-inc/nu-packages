/**
 * Intersection
 * @desc T와 U 타입에서 교차하는 프로퍼티만 반환합니다.
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type DefaultProps = { age: number };
 *
 *   // Expect: { age: number; }
 *   type DuplicateProps = Intersection<Props, DefaultProps>;
 */
export type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;
