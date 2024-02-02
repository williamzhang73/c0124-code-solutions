'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const suffixArray = [];
  for (const word of words) {
    suffixArray.push(word.concat(suffix));
  }
  return suffixArray;
}
