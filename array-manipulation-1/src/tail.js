'use strict';
/* exported tail */
function tail(array) {
  const newArray = [];
  for (let index = 1; index < array.length; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
