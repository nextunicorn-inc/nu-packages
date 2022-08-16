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
