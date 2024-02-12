'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (array.length < count) {
    return [];
  } else {
    return array.slice(0, array.length - count);
  }
}
