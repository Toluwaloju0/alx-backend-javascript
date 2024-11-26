const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!')
  } else if (url === '/students') {
    res.write('This is the list of our students')
    countStudents('database.csv')
    res.end()
  }
}).listen(1245)

module.exports = app;