export default function appendToEachArrayValue(array, appendString) {
  const arr = new Array();
  for (const value of array) {
    arr.push(appendString + value);
  }

  return arr;
}