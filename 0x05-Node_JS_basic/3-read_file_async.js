const fs = require('node:fs/promises');
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, {encoding: 'utf-8'});
  } catch(err) {
    throw new Error('Cannot load the database');
  }
}