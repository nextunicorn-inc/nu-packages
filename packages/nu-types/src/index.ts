import React from 'react';

/**
 * =============================================================================================
 * Nextunicorn Base-Types
 * =============================================================================================
 */

export type KeyofBase = keyof any;
export type Primitive = string | number | boolean | bigint | symbol | undefined | null;
export type Builtin = Primitive | Function | Date | Error | RegExp;
export type IsTuple<T> = T extends any[] ? (any[] extends T ? never : T) : never;
export type AnyRecord<T = any> = Record<KeyofBase, T>;
export type IsAny<T> = 0 extends 1 & T ? true : false;
export type IsNever<T> = [T] extends [never] ? true : false;
export type IsUnknown<T> = IsAny<T> extends true ? false : unknown extends T ? true : false;
export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;
export type ArrayOrSingle<T> = T | T[];
export type NonUndefinable<T> = T extends undefined ? never : T;
/**
 * SetDifference (same as Exclude)
 * @desc 유니온 타입 A와 B를 비교하여 B에 없는 A 유니온 타입을 반환합니다.
 * @example
 *   // Expect: "1"
 *   SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;
 *
 *   // Expect: string | number
 *   SetDifference<string | number | (() => void), Function>;
 */
export type SetDifference<A, B> = A extends B ? never : A;

/**
 * =============================================================================================
 * Nextunicorn Utility-Types
 * =============================================================================================
 */

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

/**
 * DeepNonNullable
 * @desc 객체 T의 모든 깊이에 존재하는 프로퍼티를 non-nullable 하게 변경합니다.
 */
export type DeepNonNullable<T> = T extends Builtin
  ? NonNullable<T>
  : T extends Map<infer K, infer V>
  ? Map<DeepNonNullable<K>, DeepNonNullable<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepNonNullable<K>, DeepNonNullable<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepNonNullable<K>, DeepNonNullable<V>>
  : T extends Set<infer U>
  ? Set<DeepNonNullable<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepNonNullable<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepNonNullable<U>>
  : T extends Promise<infer U>
  ? Promise<DeepNonNullable<U>>
  : T extends {}
  ? { [K in keyof T]: DeepNonNullable<T[K]> }
  : NonNullable<T>;

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

export type DeepPick<T, Filter extends DeepModify<T>> = T extends Builtin
  ? T
  : T extends Map<infer KeyType, infer ValueType>
  ? Filter extends Map<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? Map<KeyType, DeepPick<ValueType, FilterValueType>>
      : T
    : T
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? Filter extends ReadonlyMap<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? ReadonlyMap<KeyType, DeepPick<ValueType, FilterValueType>>
      : T
    : T
  : T extends WeakMap<infer KeyType, infer ValueType>
  ? Filter extends WeakMap<KeyType, infer FilterValueType>
    ? FilterValueType extends DeepModify<ValueType>
      ? WeakMap<KeyType, DeepPick<ValueType, FilterValueType>>
      : T
    : T
  : T extends Set<infer ItemType>
  ? Filter extends Set<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Set<DeepPick<ItemType, FilterItemType>>
      : T
    : T
  : T extends ReadonlySet<infer ItemType>
  ? Filter extends ReadonlySet<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? ReadonlySet<DeepPick<ItemType, FilterItemType>>
      : T
    : T
  : T extends WeakSet<infer ItemType>
  ? Filter extends WeakSet<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? WeakSet<DeepPick<ItemType, FilterItemType>>
      : T
    : T
  : T extends Array<infer ItemType>
  ? Filter extends Array<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Array<DeepPick<ItemType, FilterItemType>>
      : T
    : T
  : T extends Promise<infer ItemType>
  ? Filter extends Promise<infer FilterItemType>
    ? FilterItemType extends DeepModify<ItemType>
      ? Promise<DeepPick<ItemType, FilterItemType>>
      : T
    : T
  : Filter extends AnyRecord
  ? {
      // iterate over keys of T, which keeps the information about keys: optional, required or readonly
      [K in keyof T as K extends keyof Filter ? K : never]: Filter[K & keyof Filter] extends true
        ? T[K]
        : K extends keyof Filter
        ? Filter[K] extends DeepModify<T[K]>
          ? DeepPick<T[K], Filter[K]>
          : never
        : never;
    }
  : never;

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

/**
 * DeepUndefinable
 * @desc 객체 T의 모든 깊이에 존재하는 프로퍼티를 undefinable 하게 변경합니다.
 */
export type DeepUndefinable<T> = T extends Builtin
  ? T | undefined
  : T extends Map<infer K, infer V>
  ? Map<DeepUndefinable<K>, DeepUndefinable<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepUndefinable<K>, DeepUndefinable<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepUndefinable<K>, DeepUndefinable<V>>
  : T extends Set<infer U>
  ? Set<DeepUndefinable<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepUndefinable<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepUndefinable<U>>
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]: DeepUndefinable<T[K]> | undefined }
    : Array<DeepUndefinable<U>>
  : T extends Promise<infer U>
  ? Promise<DeepUndefinable<U>>
  : T extends {}
  ? { [K in keyof T]: DeepUndefinable<T[K]> }
  : T | undefined;

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

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * 해당 파일에는 특정 라이브러리의 타입을 가져와 사용합니다.
 * @example Node 환경에 정의된 타입
 */

/**
 * ParsedUrlQuery
 * @desc querystring 라이브러리에 정의된 타입
 * @desc NodeJS.Dict<T>
 */
export type ParsedUrlQuery = { [key: string]: string | string[] | undefined };

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

/**
 * ObjectParameter
 * @desc 객체 형태의 파라미터 타입을 정의합니다.
 */
export type ObjectParameter = { [p: string]: unknown } | unknown[];

/**
 * GenericObject
 * GenericObject
 * @desc generic value를 가진 객체의 타입을 정의합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type GenericObject<Value = unknown> = Record<string | number | symbol, Value>;

/**
 * Nullable
 * @desc 객체 T의 모든 프로퍼티를 nullable 하게 변경합니다.
 * @kind 1 depth 만 허용됩니다.
 * @example
 *   type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name: string | null; age: number | null; visible: boolean | null; }
 *    Nullable<Props>;
 */
export type Nullable<T> = { [P in keyof T]: T[P] | null } | null;

/**
 * Mutable
 * @desc 객체 T의 모든 프로퍼티를 mutable 하게 변경합니다.
 * @kind 1 depth 만 허용됩니다.
 * @example
 *    type Props = {
 *      readonly name: string;
 *      readonly age: number;
 *      readonly visible: boolean;
 *    };
 *
 *    // Expect: { name: string; age: number; visible: boolean; }
 *    Mutable<Props>;
 */
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Optional
 * @desc T로부터 특정 키만을 optional하게 변경합니다. 2번째 인자가 없다면 Partial과 같습니다.
 * @example
 *    type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name?: string; age?: number; visible?: boolean; }
 *    type Props = Optional<Props>;
 *
 *    // Expect: { name: string; age?: number; visible?: boolean; }
 *    type Props = Optional<Props, 'age' | 'visible'>;
 */
export type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

type PickKeysByValue<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

/**
 * OmitProperties
 * @desc 객체 유형에서 지정된 유형의 모든 프로퍼티를 제외합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type OmitProperties<T, P> = Omit<T, PickKeysByValue<T, P>>;

/**
 * PickProperties
 * @desc 객체 유형에서 지정된 유형의 모든 프로퍼티를 선택합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type PickProperties<T, P> = Pick<T, PickKeysByValue<T, P>>;

/**
 * OptionalKeys
 * @desc 객체 유형에서 지정된 유형의 모든 옵셔널한 프로퍼티 키를 선택합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type OptionalKeys<T> = T extends unknown
  ? {
      [K in keyof T]-?: undefined extends { [K2 in keyof T]: K2 }[K] ? K : never;
    }[keyof T]
  : never;

/**
 * RequiredKeys
 * @desc 객체 유형에서 지정된 유형의 모든 키를 required 로 선택합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type RequiredKeys<T> = T extends unknown ? Exclude<keyof T, OptionalKeys<T>> : never;

/**
 * PickKeys
 * @desc 객체 유형에서 지정된 이름의 프로퍼티 키를 선택합니다.
 * @kind 1 depth 만 허용됩니다.
 */
export type PickKeys<T, P> = Exclude<keyof PickProperties<T, P>, undefined>;

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

/**
 * 재귀탐색하며 Readonly 프로퍼티를 제거합니다.
 */
export type Writeable<T> = { -readonly [P in keyof T]: Writeable<T[P]> };

/**
 * PromiseType
 * @desc 프로미스 객체를 resolve한 타입으로 변경합니다.
 * @example
 *   // Expect: string;
 *   type Response = PromiseType<Promise<string>>;
 */
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

/**
 * ValuesType
 * @desc 객체, 배열 또는 유사 배열 타입인 T의 모든 값들을 유니온 타입으로 반환합니다.
 * @example
 *    type Props = { name: string; age: number; visible: boolean };
 *    // Expect: string | number | boolean
 *    type PropsValues = ValuesType<Props>;
 *
 *    type NumberArray = number[];
 *    // Expect: number
 *    type NumberItems = ValuesType<NumberArray>;
 *
 *    type ReadonlySymbolArray = readonly symbol[];
 *    // Expect: symbol
 *    type SymbolItems = ValuesType<ReadonlySymbolArray>;
 *
 *    type NumberTuple = [1, 2];
 *    // Expect: 1 | 2
 *    type NumberUnion = ValuesType<NumberTuple>;
 *
 *    type ReadonlyNumberTuple = readonly [1, 2];
 *    // Expect: 1 | 2
 *    type AnotherNumberUnion = ValuesType<NumberTuple>;
 *
 *    type BinaryArray = Uint8Array;
 *    // Expect: number
 *    type BinaryItems = ValuesType<BinaryArray>;
 */
export type ValuesType<T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>> =
  T extends ReadonlyArray<any>
    ? T[number]
    : T extends ArrayLike<any>
    ? T[number]
    : T extends object
    ? T[keyof T]
    : never;

/**
 * =============================================================================================
 * Nextunicorn Design-Types
 * =============================================================================================
 */

export type BreakPointKeyTypes =
  | 'large'
  | 'large1300'
  | 'large1200'
  | 'large1240'
  | 'medium'
  | 'small';

export type ValidationTypes = 'light' | 'dark' | 'gray' | 'error';

export type UnicornVariantTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'angels-primary'
  | 'angels-secondary'
  | 'angels-tertiary';

export type SizeTypes = 'large' | 'medium' | 'small';

/**
 * =============================================================================================
 * Nextunicorn React-Component-Types
 * =============================================================================================
 */

export interface DisableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface IconProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  isIconOnly?: boolean;
  isIconAfter?: boolean;
}

export interface ReactStandardProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}
