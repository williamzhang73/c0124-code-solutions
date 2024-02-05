'use strict';
/* exported pick */
function pick(source, keys) {
  /*   const source1 = { ...source }; */
  const picked = {};
  for (const key of keys) {
    /*  console.log('key', key); */
    if (key in source) {
      picked[key] = source[key];
    }
  }
  /*   console.log('picked', picked); */
  return picked;
}
