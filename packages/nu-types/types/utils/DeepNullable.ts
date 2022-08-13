import { Builtin, IsTuple } from './_BasicTypes';

/**
 * DeepNullable
 * @desc 객체 T의 모든 깊이에 존재하는 프로퍼티를 nullable 하게 변경합니다.
 */
export type DeepNullable<T> = T extends Builtin
  ? T | null
  : T extends Map<infer K, infer V>
  ? Map<DeepNullable<K>, DeepNullable<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepNullable<K>, DeepNullable<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepNullable<K>, DeepNullable<V>>
  : T extends Set<infer U>
  ? Set<DeepNullable<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepNullable<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepNullable<U>>
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]: DeepNullable<T[K]> | null }
    : Array<DeepNullable<U>>
  : T extends Promise<infer U>
  ? Promise<DeepNullable<U>>
  : T extends {}
  ? { [K in keyof T]: DeepNullable<T[K]> }
  : T | null;
