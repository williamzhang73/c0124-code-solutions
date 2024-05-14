export function countOccurrences(str: string, char: string): number {
  let count = 0;
  let index = 0;
  while (str[index]) {
    if (str[index] === char) {
      count++;
    }
    index++;
  }
  return count;
}
