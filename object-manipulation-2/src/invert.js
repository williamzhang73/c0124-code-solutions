'use strict';
/* exported invert */
function invert(source) {
  const copiedSource = { ...source };
  const invertedSource = {};
  /*  console.log(copiedSource); */
  for (const key in copiedSource) {
    invertedSource[copiedSource[key]] = key;
  }
  console.log('invertedSource', invertedSource);
  return invertedSource;
}
