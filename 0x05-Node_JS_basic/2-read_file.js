const fs = require('node:fs');

function countStudents(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const dataList = data.toString().split('\n');
    let total = 0;
    const CE = [];
    const SWE = [];
    for (let index = 1; index < dataList.length - 1; index += 1) {
      const student = dataList[index].split(',');
      if (student[3] === 'CS') {
        total += 1;
        CE.push(student[0]);
      } else if (student[3] === 'SWE') {
        total += 1;
        SWE.push(student[0]);
      }
    }
    process.stdout.write(`Number of students: ${total}\n`);
    process.stdout.write(`Number of students in CE: ${CE.length}. \
List ${CE.toString().replaceAll(',', ', ')}\n`);
    process.stdout.write(`Number of students in SWE: ${SWE.length}. \
List ${SWE.toString().replaceAll(',', ', ')}\n`);
  });
}

module.exports = countStudents;
