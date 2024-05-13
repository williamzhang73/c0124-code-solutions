'use strict';
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
function mergeSort(arrA) {
  const length = arrA.length;
  if (length < 2) return arrA;
  const middle = length / 2;
  const left = arrA.slice(0, middle);
  const right = arrA.slice(middle, length);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  const sorted = [];
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted[k] = left[i];
      k++;
      i++;
    } else {
      sorted[k] = right[j];
      k++;
      j++;
    }
  }
  while (i < left.length) {
    sorted[k] = left[i];
    k++;
    i++;
  }
  while (j < right.length) {
    sorted[k] = right[j];
    k++;
    j++;
  }
  return sorted;
}
console.log('result: ', mergeSort([9, 7, 1, 5, 2]));
