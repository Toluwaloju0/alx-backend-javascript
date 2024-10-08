/* eslint-disable consistent-return */
export default function updateUniqueItems(map) {
  try {
    map.forEach((val, key) => {
      if (val === 1) {
        map.set(key, 100);
      }
    });
    return map;
  } catch (error) {
    console.log('Cannot process');
  }
}
