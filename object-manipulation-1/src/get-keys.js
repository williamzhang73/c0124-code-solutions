'use strict';
/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    console.log(key);
    keys.push(key);
  }
  return keys;
}
