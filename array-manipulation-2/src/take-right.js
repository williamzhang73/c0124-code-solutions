'use strict';
/* exported takeRight */
function takeRight(array, count) {
  if (array.length <= count) {
    return array;
  } else {
    return array.slice(array.length - count, array.length);
  }
}
