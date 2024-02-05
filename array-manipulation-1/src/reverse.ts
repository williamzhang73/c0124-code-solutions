/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}
