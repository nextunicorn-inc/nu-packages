import { Builtin } from './_BasicTypes';

/**
 * DeepRequired
 * @desc 객체 T의 모든 깊이에 존재하는 프로퍼티를 required 하게 변경합니다.
 */
export type DeepRequired<T> = T extends Error
  ? Required<T>
  : T extends Builtin
  ? T
  : T extends Map<infer K, infer V>
  ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U>
  ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U>
  ? Promise<DeepRequired<U>>
  : T extends {}
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : Required<T>;
