/* exported truncate */
function truncate(length: number, string: string): string {
  /* console.log(string.slice(0, length)); */
  return string.slice(0, length) + '...';
}
