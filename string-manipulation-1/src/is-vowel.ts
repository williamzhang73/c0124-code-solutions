/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
