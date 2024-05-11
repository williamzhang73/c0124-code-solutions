/* function sort(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        const valueHolder = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = valueHolder;
      }
    }
  }
  return newArr;
}
console.log(sort([9, 3, 7, 1, 2, 5])); 
Time Complexity: O(n^2)
*/
