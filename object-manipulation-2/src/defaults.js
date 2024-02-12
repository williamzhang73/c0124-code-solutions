'use strict';
/* exported defaults */
function defaults(target, source) {
  /*  const copiedTarget = { ...target }; */
  /*   const copiedSource = { ...source }; */
  for (const key in source) {
    /*     console.log('key', key); */
    if (!Object.hasOwn(target, key)) {
      target[key] = source[key];
    }
  }
  console.log(target);
}
