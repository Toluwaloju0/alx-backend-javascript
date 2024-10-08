export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);
  try {
    data.setInt8(position, value);
    return data;
  } catch (RangeError) {
    throw new Error('Position outside range');
  }
}
