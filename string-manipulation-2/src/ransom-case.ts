/* exported ransomCase */
function ransomCase(string: string): string {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str = str.concat(string[i].toLowerCase());
    } else {
      str = str.concat(string[i].toUpperCase());
    }
  }
  /*  console.log("aaaaaa "+str); */
  return str;
}
