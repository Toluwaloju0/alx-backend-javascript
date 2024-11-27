const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs')

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!')
  } else if (url === '/students') {
    // Get then list of students
    const data = fs.readFileSync('database.csv', 'utf-8');
    const dataList = data.split('\n');
    let total = 0;
    const CS = [];
    const SWE = [];
    for (let index = 1; index < dataList.length; index += 1) {
      const student = dataList[index].split(',');
      if (student[3] === 'CS') {
        total += 1;
        CS.push(student[0]);
      } else if (student[3] === 'SWE') {
        total += 1;
        SWE.push(student[0]);
      }
    }
    res.write('This is the list of our students\n')
    res.write(`Number of students: ${total}\n`)
    res.write(`Number of students in CS: ${CS.length}. List: ${CS.toString().replaceAll(',', ', ')}\n`)
    res.write(`Number of students in SWE: ${SWE.length}. List: ${SWE.toString().replaceAll(',', ', ')}`)
    res.end()
  }
}).listen(1245)

module.exports = app;