/* exported getKeys */
function getKeys(object: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in object) {
    console.log(key);
    keys.push(key);
  }
  return keys;
}
