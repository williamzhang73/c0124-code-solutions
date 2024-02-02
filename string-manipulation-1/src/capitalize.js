'use strict';
/* exported capitalize */
function capitalize(word) {
  const sliceArray = word.slice(1, word.length).toLowerCase();
  // console.log(sliceArray);
  return word[0].toUpperCase().concat(sliceArray);
}
