/* exported filterOutStrings */
function filterOutStrings(values: any): any {
  const filteredArray = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      filteredArray.push(value);
    }
  }
  return filteredArray;
}
