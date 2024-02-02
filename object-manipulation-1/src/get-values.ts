/* exported getValues */
function getValues(object: Record<string, unknown>): any {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
