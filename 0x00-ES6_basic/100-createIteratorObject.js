export default function createIteratorObject(report) {
  const newlist = [];
  
  for (let a in report.allEmployees) {
    newlist.push(...report.allEmployees[a]);
  };
  return newlist;
}