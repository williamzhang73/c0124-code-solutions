export function titleCase(str: string): string {
  const splitedStr = str.split(' ');
  if (splitedStr.length === 0) return '';
  let capitalizedStr = '';
  const mapped = splitedStr.map((element) => {
    const capitalizedElement = element[0].toUpperCase() + element.slice(1);
    capitalizedStr = capitalizedStr + ' ' + capitalizedElement;
    return capitalizedElement;
  });
  return capitalizedStr.trim();
}
