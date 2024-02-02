'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const filteredArray = [];
  for (const value of values) {
    if (typeof value !== 'string') {
      filteredArray.push(value);
    }
  }
  return filteredArray;
}
