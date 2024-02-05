/* exported omit */
function omit(
  source: Record<string, number>,
  keys: string[]
): Record<string, number> {
  const omitted = { ...source };
  for (const key of keys) {
    if (Object.hasOwn(source, key)) {
      delete omitted[key];
    }
  }
  return omitted;
}
