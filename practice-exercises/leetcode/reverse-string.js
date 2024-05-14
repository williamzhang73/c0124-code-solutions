export function reverseString(str) {
  console.log('aa');
  if (str.length === 0) return '';
  var arr = Array(str);
  var reversed = '';
  while (arr.length > 0) {
    var element = arr.pop();
    reversed = reversed.concat(element);
  }
  return reversed;
}
