/**
 * 현재 시간을 MS(밀리초)로 반환합니다.
 */
const getCurrentTimeMS = () => Date.now() / 1000 - 5 * 60;

export default getCurrentTimeMS;
