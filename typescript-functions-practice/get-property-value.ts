/* exported getPropertyValue */

interface ObjectType {
  name: string;
  occupation: string;
  birthPlace: string;
}
function getPropertyValue(object: ObjectType, key: string): string {
  return object[key];
}
