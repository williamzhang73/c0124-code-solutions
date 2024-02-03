/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const words = string.split(' ');
  let capitalizedString = '';
  for (const word of words) {
    let tempStr = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        tempStr = tempStr.concat(word[i].toUpperCase());
      } else {
        tempStr = tempStr.concat(word[i].toLowerCase());
      }
    }
    tempStr = tempStr.concat(' ');
    capitalizedString = capitalizedString.concat(tempStr);
  }
  return capitalizedString.trim();
  /*   let  a=', ';
  a=a.toLowerCase();
  console.log("bbbbbbbbb");
  console.log("aaaaa"+a);
  return ""; */
}
