/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  if (array.length <= count) {
    return array;
  } else {
    return array.slice(array.length - count, array.length);
  }
}
