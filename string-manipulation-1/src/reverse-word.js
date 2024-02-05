'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversedString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(word[i]);
  }
  return reversedString;
}
