'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunkArray = [];
  let tempArray = [];
  let i = 0;
  for (const arr of array) {
    tempArray.push(arr);
    if (tempArray.length === size) {
      chunkArray.push(tempArray);
      tempArray = [];
    } else if (array.length - i < size) {
      chunkArray.push(tempArray);
    }
    i++;
  }
  return chunkArray;
}
