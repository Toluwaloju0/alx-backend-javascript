export default function createEmployeesObject(departmentName, employees) {
  const newObject = {};
  newObject[departmentName] = [...employees];

  return newObject
}