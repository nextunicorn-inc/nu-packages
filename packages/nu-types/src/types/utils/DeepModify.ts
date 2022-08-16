import { AnyRecord, NonUndefinable } from './_BasicTypes';

export type DeepModify<T> =
  | (T extends AnyRecord
      ? {
          [K in keyof T]?: undefined extends { [K2 in keyof T]: K2 }[K]
            ? NonUndefinable<T[K]> extends object
              ? true | DeepModify<NonUndefinable<T[K]>>
              : true
            : T[K] extends object
            ? true | DeepModify<T[K]>
            : true;
        }
      : never)
  | (T extends Array<infer E> ? Array<DeepModify<E>> : never)
  | (T extends Promise<infer E> ? Promise<DeepModify<E>> : never)
  | (T extends Set<infer E> ? Set<DeepModify<E>> : never)
  | (T extends ReadonlySet<infer E> ? ReadonlySet<DeepModify<E>> : never)
  | (T extends WeakSet<infer E> ? WeakSet<DeepModify<E>> : never)
  | (T extends Map<infer K, infer E> ? Map<K, DeepModify<E>> : never)
  | (T extends ReadonlyMap<infer K, infer E> ? ReadonlyMap<K, DeepModify<E>> : never)
  | (T extends WeakMap<infer K, infer E> ? WeakMap<K, DeepModify<E>> : never);
