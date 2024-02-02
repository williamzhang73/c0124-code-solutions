'use strict';
/* exported compact */
function compact(array) {
  const compactArray = [];
  for (const arr of array) {
    if (arr) {
      compactArray.push(arr);
    }
  }
  return compactArray;
}
