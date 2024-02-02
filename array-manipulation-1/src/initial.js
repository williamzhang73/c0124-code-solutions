'use strict';
/* exported initial */
function initial(array) {
  const newArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
