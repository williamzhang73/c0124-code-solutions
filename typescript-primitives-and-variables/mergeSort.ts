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
function mergeSort(arrA: number[]): number[] {
  const length: number = arrA.length;
  if (length < 2) return arrA;
  const middle: number = length / 2;
  const left: number[] = arrA.slice(0, middle);
  const right: number[] = arrA.slice(middle, length);
  const sortedLeft: number[] = mergeSort(left);
  const sortedRight: number[] = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
  const sorted: number[] = [];
  let k: number = 0;
  let i: number = 0;
  let j: number = 0;
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
