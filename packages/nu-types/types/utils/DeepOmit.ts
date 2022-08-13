import { AnyRecord, Builtin } from './_BasicTypes';
import { DeepModify } from './DeepModify';

export type DeepOmit<T, Filter extends DeepModify<T>> = T extends Builtin
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? Filter extends Map<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? Map<KeyType, DeepOmit<ValueType, FilterValueType>>
      : T
    : T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? Filter extends ReadonlyMap<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? ReadonlyMap<KeyType, DeepOmit<ValueType, FilterValueType>>
      : T
    : T
  : T extends WeakMap<infer KeyType, infer ValueType>
  ? Filter extends WeakMap<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? WeakMap<KeyType, DeepOmit<ValueType, FilterValueType>>
      : T
    : T
  : T extends Set<infer ItemType>
  ? Filter extends Set<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Set<DeepOmit<ItemType, FilterItemType>>
      : T
    : T
  : T extends ReadonlySet<infer ItemType>
  ? Filter extends ReadonlySet<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? ReadonlySet<DeepOmit<ItemType, FilterItemType>>
      : T
    : T
  : T extends WeakSet<infer ItemType>
  ? Filter extends WeakSet<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? WeakSet<DeepOmit<ItemType, FilterItemType>>
      : T
    : T
  : T extends Array<infer ItemType>
  ? Filter extends Array<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Array<DeepOmit<ItemType, FilterItemType>>
      : T
    : T
  : T extends Promise<infer ItemType>
  ? Filter extends Promise<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Promise<DeepOmit<ItemType, FilterItemType>>
      : T
    : T
  : Filter extends AnyRecord
  ? {
      [K in keyof T as K extends keyof Filter
        ? Filter[K] extends true
          ? never
          : K
        : K]: K extends keyof Filter
        ? Filter[K] extends DeepModify<T[K]>
          ? DeepOmit<T[K], Filter[K]>
          : T[K]
        : T[K];
    }
  : never;
