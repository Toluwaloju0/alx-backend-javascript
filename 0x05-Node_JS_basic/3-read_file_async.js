const fs = require('fs');

async function countStudents(path) {
  promise = new Promise((resolve, reject) => {
    try {
      fs.readFile(path, (err, data) => {
        const dataList = data.toString().split('\n');
        let total = 0;
        const CS = [];
        const SWE = [];
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
      });
    } catch (err) {
      throw new Error('Cannot load the database');
    }
  });
  return promise;
}
  

module.exports = countStudents;
