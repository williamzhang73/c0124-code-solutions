'use strict';
const order01 = {
  'order placed': new Date('2020-08-04'),
  total: 34.0,
  'ship to': 'JS Masher',
  'order number': '114-999999999',
  items: [
    {
      itemName: 'Javascript for impatient programmers',
      author: 'Dr.Axel',
      price: 31.55,
      review: ['good', 'recommended'],
    },
  ],
};
const order02 = {
  'order placed': new Date('2020-07-19'),
  total: 44.53,
  'ship to': 'JS Masher',
  'order number': '113-999999999',
  items: [
    {
      itemName: 'The timeless way of building',
      author: 'Alexander, Christopher',
      price: 41.33,
      review: ['good', 'recommended'],
    },
  ],
};
const order03 = {
  'order placed': new Date('2020-07-04'),
  total: 17.22,
  'ship to': 'JS Masher',
  'order number': '119-999999999',
  items: [
    {
      itemName: 'gamecube controller adaptor',
      price: 15.98,
      review: ['good', 'recommended'],
    },
  ],
};
const order04 = {
  'order placed': new Date('2020-07-04'),
  total: 138.93,
  'ship to': 'JS Masher',
  'order number': '123-999999999',
  items: [
    {
      itemName: 'gamecube controller adaptor',
      price: 94.95,
      review: ['good', 'recommended'],
    },
    {
      itemName: 'the art of sql',
      price: 33.99,
      review: ['good', 'recommended'],
    },
  ],
};
const orderHistory = [order01, order02, order03, order04];
console.log('the order history is: ', orderHistory);
