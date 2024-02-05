/* exported getWords */
function getWords(string: string): string[] {
  if (string.length === 0) {
    return [];
  }
  return string.split(' ');
}
