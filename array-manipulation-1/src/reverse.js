'use strict';
/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}
