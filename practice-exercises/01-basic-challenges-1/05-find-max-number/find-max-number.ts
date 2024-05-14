export function findMaxNumber(arr: number[]): number {
  let max = 0;
  arr.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}
