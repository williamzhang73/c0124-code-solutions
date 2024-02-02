'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredArray = [];
  for (const value of values) {
    if (value !== null) {
      filteredArray.push(value);
    }
  }
  return filteredArray;
}
