const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataList = data.split('\n');
    let total = 0;
    const CS = [], SWE = [];
    for (let index = 1; index < dataList.length - 1; index += 1) {
      const student = dataList[index].split(',');
      if (student[3] === 'CS') {
        total += 1;
        CS.push(student[0]);
      } else if (student[3] === 'SWE') {
        total += 1;
        SWE.push(student[0]);
      }
    }
    console.log(`Number of students: ${total}`);
    console.log(`Number of students in CS: ${CS.length}. \
List: ${CS.toString().replaceAll(',', ', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. \
List: ${SWE.toString().replaceAll(',', ', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
