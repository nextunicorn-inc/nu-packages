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
