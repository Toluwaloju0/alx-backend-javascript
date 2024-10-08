export default function hasValuesFromArray(set, array) {
  let val = true;
  array.forEach((x) => {
    if (set.has(x) === false) {
      val = false;
    }
  });

  return val;
}
