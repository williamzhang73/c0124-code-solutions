export function reverseString(str: string): string {
  /*   const length = str.length;
  if (length === 0) return '';
  let newStr = '';
  for (let i = length - 1; i >= 0; i--) {
    newStr = newStr.concat(str[i]);
  }
  return newStr; */
  if (str.length === 0) return '';
  const arr = new Array(...str);
  let reversed = '';
  while (arr.length > 0) {
    const element = arr.pop() as string;
    reversed = reversed.concat(element);
  }
  return reversed;
}
