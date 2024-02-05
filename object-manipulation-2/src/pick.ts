/* exported pick */
function pick(
  source: Record<string, number>,
  keys: string[]
): Record<string, number> {
  /*   const source1 = { ...source }; */
  const picked: Record<string, any> = {};
  for (const key of keys) {
    /*  console.log('key', key); */
    if (key in source) {
      picked[key] = source[key];
    }
  }
  /*   console.log('picked', picked); */
  return picked;
}
