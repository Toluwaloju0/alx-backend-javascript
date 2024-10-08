export default function cleanset(set, startstring) {
  if (startstring === '') {
    return '';
  }
  let string = '';

  set.forEach((val) => {
    const sub = val.slice(0, startstring.length);
    if (sub === startstring) {
      string = `${string + val.slice(startstring.length)}-`;
    }
  });

  return string.slice(0, -1);
}
