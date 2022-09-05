const deepMerge = <T, U>(opts: T, overrides: U, lowerCase = false) => {
  const out: any = {};

  if (Array.isArray(opts)) return opts.concat(overrides);

  for (const i in opts) {
    const key = lowerCase ? i.toLowerCase() : i;
    out[key] = opts[i];
  }

  for (const i in overrides) {
    const key = lowerCase ? i.toLowerCase() : i;
    const value = /** @type {unknown} */ overrides[i];
    out[key] =
      key in out && typeof value == 'object' ? deepMerge(out[key], value, key == 'headers') : value;
  }
  return out;
};

export default deepMerge;
