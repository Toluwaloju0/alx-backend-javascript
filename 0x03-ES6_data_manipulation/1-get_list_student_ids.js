export default function getListStudentIds(getListStudents) {
  if (!(Array.isArray(getListStudents))) {
    return [];
  }
  const list = getListStudents.map((x) => x.id);
  return list;
}
