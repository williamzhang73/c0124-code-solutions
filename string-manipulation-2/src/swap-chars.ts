/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      str = str.concat(string[secondIndex]);
    } else if (i === secondIndex) {
      str = str.concat(string[firstIndex]);
    } else {
      str = str.concat(string[i]);
    }
  }
  return str;
}
