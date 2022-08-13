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
