const fs = require('fs');

function countStudents(path) {
  // 
  
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error("Cannot load the database");
    }
    const CS = [];
    const SWE = [];

    data.toString().split('\n').forEach((student) => {
      const studentData = student.split(',');

      if (studentData[3] === 'SWE') {
        SWE.push(studentData[0]);
      } else if (studentData[3] === 'CS') {
        CS.push(studentData[0]);
      }
    });

    console.log(`Number of students: ${CS.length + SWE.length}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.toString().replaceAll(',', ', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.toString().replaceAll(',', ', ')}`);
  });
}

module.exports = countStudents;
