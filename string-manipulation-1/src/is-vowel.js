'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
