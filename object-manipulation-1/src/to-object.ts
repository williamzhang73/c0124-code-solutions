/* exported toObject */
function toObject(keyValuePair: any): Record<string, unknown> {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
