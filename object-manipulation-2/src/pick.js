'use strict';
/* exported pick */
function pick(source, keys) {
  const picked = {};
  for (const key of keys) {
    if (key in source) {
      if (source[key] !== undefined) {
        picked[key] = source[key];
      }
    }
  }
  return picked;
}
