import { Builtin, IsTuple, IsUnknown } from './_BasicTypes';

/**
 * DeepPartial
 * @desc 객체 T의 모든 깊이에 존재하는 프로퍼티를 옵셔널하게 변경합니다.
 * @example
 *   // Expect: {
 *   //   first?: {
 *   //     second?: {
 *   //       name?: string;
 *   //     };
 *   //   };
 *   // }
 *   type NestedProps = {
 *     first: {
 *       second: {
 *         name: string;
 *       };
 *     };
 *   };
 *   type PartialNestedProps = DeepPartial<NestedProps>;
 */
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Map<infer K, infer V>
  ? Map<Partial<K>, Partial<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<Partial<K>, Partial<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<Partial<K>, Partial<V>>
  : T extends Set<infer U>
  ? Set<Partial<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<Partial<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<Partial<U>>
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]?: Partial<T[K]> }
    : Array<Partial<U> | undefined>
  : T extends Promise<infer U>
  ? Promise<Partial<U>>
  : T extends {}
  ? { [K in keyof T]?: Partial<T[K]> }
  : IsUnknown<T> extends true
  ? unknown
  : Partial<T>;
