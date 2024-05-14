export function reverseString(str: string): string {
  console.log('aa');
  if (str.length === 0) return '';
  const arr = Array(str);
  let reversed = '';
  while (arr.length > 0) {
    const element = arr.pop() as string;
    reversed = reversed.concat(element);
  }
  return reversed;
}
