'use strict';
/* exported truncate */
function truncate(length, string) {
  /* console.log(string.slice(0, length)); */
  return string.slice(0, length) + '...';
}
