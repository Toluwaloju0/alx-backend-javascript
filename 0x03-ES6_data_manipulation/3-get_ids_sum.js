export default function getStudentIdsSum(getListStudents) {
  const init = 0;
  return getListStudents.reduce((acc, obj) => acc + obj.id, init);
}
