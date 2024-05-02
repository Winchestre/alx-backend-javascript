export default function appendToEachArrayValue(array, appendString) {
  const arr = new Array();
  for (const idx of array) {
    arr.push(appendString + idx);
  }

  return arr;
}