/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  if (array.length < count) {
    return [];
  } else {
    return array.slice(0, array.length - count);
  }
}
