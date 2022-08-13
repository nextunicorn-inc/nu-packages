const parseQueryString = (search: string): Record<string, string> => {
  const hashes = search.slice(search.indexOf('?') + 1);
  if (!hashes) return {};

  if (typeof URLSearchParams !== 'undefined')
    return Object.fromEntries(new URLSearchParams(hashes).entries());

  return JSON.parse(
    `{"${hashes.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
    (key, value: string) => (key === '' ? value : decodeURIComponent(value)),
  );
};

export default parseQueryString;
