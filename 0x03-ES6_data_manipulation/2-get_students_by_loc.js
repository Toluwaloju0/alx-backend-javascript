export default function getStudentsByLocation(getListStudents, city) {
  const list = getListStudents.filter((obj) => obj.location === city);

  return list;
}
