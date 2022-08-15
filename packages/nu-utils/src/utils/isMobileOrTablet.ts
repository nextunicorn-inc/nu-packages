/**
 * @reference
 * https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
 * @description
 * 에 독립적으로 존재해야하는 로직이므로 web/@utils의 동일한 로직과 중복하고 있음을 인지해야함
 * navigator?.maxTouchPoints === 5 터치기능이 있다는 의미  https://minemanemo.tistory.com/101
 * */
const isMobileOrTablet = () =>
  typeof navigator !== 'undefined' &&
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Miniuse/i.test(navigator?.userAgent) ||
    window?.navigator?.maxTouchPoints === 5);

export default isMobileOrTablet;
