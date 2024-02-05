/* exported invert */
function invert(source: Record<string, any>): Record<string, string> {
  const copiedSource = { ...source };
  const invertedSource: Record<string, any> = {};
  /*  console.log(copiedSource); */
  for (const key in copiedSource) {
    invertedSource[copiedSource[key]] = key;
  }
  console.log('invertedSource', invertedSource);
  return invertedSource;
}
