/**
 * 영문 컨텐츠의 첫 글자를 소문자로 변환 후 반환합니다.
 *
 * @param content
 */
const toLowerCaseStart = (content: string) => `${content[0].toLowerCase()}${content.substring(1)}`;

export default toLowerCaseStart;
