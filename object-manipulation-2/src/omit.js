'use strict';
/* exported omit */
function omit(source, keys) {
  const omitted = { ...source };
  for (const key of keys) {
    if (Object.hasOwn(source, key)) {
      delete omitted[key];
    }
  }
  return omitted;
}
