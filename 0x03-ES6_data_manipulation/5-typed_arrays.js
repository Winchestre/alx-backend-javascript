export default function createInt8TypedArray(length, position, number) {
  if (position >= length){
    throw new Error("Position outside range");
  }
  const uint8 = new Uint8Array();

}