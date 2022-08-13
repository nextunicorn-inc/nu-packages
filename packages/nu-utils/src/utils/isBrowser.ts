/**
 * SSR 중인지 확인합니다.
 */
const isBrowser = () => typeof window !== 'undefined';

export default isBrowser;
