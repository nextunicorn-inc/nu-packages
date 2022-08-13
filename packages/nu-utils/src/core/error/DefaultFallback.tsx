import { RenderFallbackParams } from '../../@types/error';

function DefaultFallback({ reset }: RenderFallbackParams) {
  const resetError = () => (reset === undefined ? null : reset());
  return (
    <>
      <button onClick={resetError}>재시도</button>
    </>
  );
}
export default DefaultFallback;
