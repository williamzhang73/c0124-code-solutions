/* exported reverseWord */
function reverseWord(word: string): string {
  let reversedString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(word[i]);
  }
  return reversedString;
}
