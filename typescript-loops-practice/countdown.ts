/* exported countdown */
function countdown(number: number): number[] {
  const nums = [];
  while (number >= 0) {
    nums.push(number);
    number--;
  }
  return nums;
}
