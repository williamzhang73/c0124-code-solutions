/* exported capitalize */
function capitalize(word: string): string {
  const sliceArray = word.slice(1, word.length).toLowerCase();
  // console.log(sliceArray);
  return word[0].toUpperCase().concat(sliceArray);
}
