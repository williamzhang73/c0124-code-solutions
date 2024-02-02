/* exported tail */
function tail(array: unknown[]): unknown[] {
  const newArray = [];
  for (let index = 1; index < array.length; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
