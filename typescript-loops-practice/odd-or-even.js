'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddOrEven = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      oddOrEven.push('even');
    } else {
      oddOrEven.push('odd');
    }
  }
  return oddOrEven;
}
