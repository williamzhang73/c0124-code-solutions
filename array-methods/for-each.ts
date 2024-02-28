const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((element) => {
  console.log(element);
});
console.log('Reverse order:');

values.forEach((element) => {
  const index = values.indexOf(element);
  console.log(values[9 - index]);
});
