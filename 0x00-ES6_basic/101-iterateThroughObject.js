export default function iterateThroughObject(reportWithIterator) {
  let a = 0;
  let string = '';
  for (const person of reportWithIterator) {
    if (a === reportWithIterator.length - 1) {
      string += person;
      break;
    }
    string = `${string + person} | `;
    a += 1;
  }
  return string;
}
