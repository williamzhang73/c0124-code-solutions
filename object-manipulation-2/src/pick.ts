/* exported pick */
function pick(
  source: Record<string, number>,
  keys: string[]
): Record<string, number> {
  const picked: Record<string, number> = {};
  for (const key of keys) {
    if (key in source) {
      if (source[key] !== undefined) {
        picked[key] = source[key];
      }
    }
  }
  return picked;
}
