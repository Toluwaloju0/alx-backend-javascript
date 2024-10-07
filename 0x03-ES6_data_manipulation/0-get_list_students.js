function intoList(id, firstName, location) {
  return {
    id,
    firstName,
    location,
  };
}

export default function getListStudents() {
  const list = [];

  list.push(
    intoList(1, 'Guillaume', 'San Francisco'),
    intoList(2, 'James', 'Columbia'),
    intoList(5, 'Serena', 'San Francisco'),
  );

  return list;
}
