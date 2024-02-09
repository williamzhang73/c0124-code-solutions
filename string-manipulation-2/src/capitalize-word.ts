/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const sliceArray = word.slice(1, word.length).toLowerCase();
  /* console.log(sliceArray); */
  const capitalized = word[0].toUpperCase().concat(sliceArray);
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  // console.log(word===capitalized);
  return capitalized;
}
