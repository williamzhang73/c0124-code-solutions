/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const suffixArray = [];
  for (const word of words) {
    suffixArray.push(word.concat(suffix));
  }
  return suffixArray;
}
