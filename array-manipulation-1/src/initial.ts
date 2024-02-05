/* exported initial */
function initial(array: unknown[]): unknown[] {
  const newArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
