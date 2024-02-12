'use strict';
/* exported includes */
function includes(array, value) {
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
}
