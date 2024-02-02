/* exported filterOutNulls */
function filterOutNulls(values: any): any {
  const filteredArray = [];
  for (const value of values) {
    if (value !== null) {
      filteredArray.push(value);
    }
  }
  return filteredArray;
}
