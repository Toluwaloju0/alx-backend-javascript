export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const list = listStudents.filter((obj) => obj.location === city);

  const newList = list.map((obj) => {
    const grade = newGrades.filter((grade) => grade.studentId === obj.id)
    console.log(grade)
    if (grade.length > 0) {
      return {
        ...obj,
        'grade': grade[0].grade,
      }
    } else {
      return {
        ...obj,
        'grade': 'N/A',
      }
    }
  });

  return newList;
}
