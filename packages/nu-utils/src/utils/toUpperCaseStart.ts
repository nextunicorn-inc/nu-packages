/**
 * 영문 컨텐츠의 첫 글자를 대문자로 변환 후 반환합니다.
 *
 * @param content
 */
const toUpperCaseStart = (content: string) => `${content[0].toUpperCase()}${content.substring(1)}`;

export default toUpperCaseStart;
