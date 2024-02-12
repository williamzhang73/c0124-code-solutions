/* exported includes */
function includes(array: any[], value: any): boolean {
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
}
