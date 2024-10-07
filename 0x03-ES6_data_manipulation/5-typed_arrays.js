/* eslint-disable consistent-return */
export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const data = new DataView(buffer);
    data.setInt8(position, value);
    return data;
  } catch (RangeError) {
    console.log('Position outside range');
  }
}
