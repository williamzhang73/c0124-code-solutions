/* exported defaults */
function defaults(
  target: Record<string, number>,
  source: Record<string, number>
): void {
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
