'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const mapppedArr = prices.map((element) => {
  return { price: element, salePrice: element / 2 };
});
console.log('Price objects: ', mapppedArr);
const formatted = prices.map((element) => {
  return element.toFixed(2);
});
console.log('Formatted Price: ', formatted);
