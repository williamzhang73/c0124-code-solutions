/* exported compact */
function compact(array: unknown[]): unknown[] {
  const compactArray = [];
  for (const arr of array) {
    if (arr) {
      compactArray.push(arr);
    }
  }
  return compactArray;
}
