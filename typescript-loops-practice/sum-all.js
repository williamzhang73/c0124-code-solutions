'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
