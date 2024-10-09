interface Student {
  firstName: string;
  lastname: string;
  age: number;
  location: string,
};

const student1: Student = {
  firstName: 'John',
  lastname: 'Samuel',
  age: 10,
  location: 'Houston',
};
const student2: Student = {
  firstName: 'James',
  lastname: 'Maxwell',
  age: 15,
  location: 'California',
};

const studentsList: Array<Student> = [
  student1, student2,
]

const doc = new Document();
const table = doc.createElement('table');
doc.append(table);

studentsList.forEach((element: any) => {
  table.append(`<td>${element.firstName} ${element.location}</td>`);
});
