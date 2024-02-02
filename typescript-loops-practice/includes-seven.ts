/* exported includesSeven */
function includesSeven(array: any): boolean {
  let includeSeven = false;
  for (const element of array) {
    if (element === 7) {
      includeSeven = true;
      return includeSeven;
    }
  }
  return includeSeven;
}
