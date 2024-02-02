'use strict';
/* exported includesSeven */
function includesSeven(array) {
  let includeSeven = false;
  for (const element of array) {
    if (element === 7) {
      includeSeven = true;
      return includeSeven;
    }
  }
  return includeSeven;
}
