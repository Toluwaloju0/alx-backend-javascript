const express = require('express');
const fs = require('fs');

const app = express();

// endpoint for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// create the next endpoint "/students"
app.get("/students", (res, req) => {
  let string = 'This is the list of our students\n';
  try {
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
    string = string + `Number of students: ${total}\n`;
    string += `Number of students in CS: ${CS.length}. List: ${CS.toString().replaceAll(',', ', ')}\n`
    string += `Number of students in SWE: ${SWE.length}. List: ${SWE.toString().replaceAll(',', ', ')}`;

    res.send(JSON.stringify(string))
  } catch (err) {
    console.log(err);
    res.send('Cannot load the database');
  }
});

// listen on the required port
app.listen(1245)

module.exports = app;
