export function backendSafe() {
  const isNode = typeof process !== 'undefined' && process.release?.name === 'node';
  if (!isNode) return;
  // {
  //   throw new Error('무엇인가 브라우저에 잘못들어감 ... !');
  // }
}
