'use strict';
/* exported numVowels */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  for (const str of string) {
    if (vowels.includes(str)) {
      count++;
    }
  }
  return count;
}
