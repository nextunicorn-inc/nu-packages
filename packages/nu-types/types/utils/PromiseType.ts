/**
 * PromiseType
 * @desc 프로미스 객체를 resolve한 타입으로 변경합니다.
 * @example
 *   // Expect: string;
 *   type Response = PromiseType<Promise<string>>;
 */
export type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
