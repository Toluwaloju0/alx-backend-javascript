export default function createIteratorObject(report) {
  const newlist = [];
  // eslint-disable-next-line guard-for-in
  for (const a in report.allEmployees) {
    newlist.push(...report.allEmployees[a]);
  }
  return newlist;
}
