export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== str) {
      throw new Error("Name must be a string");
    }
    if (typeof length !== int) {
      throw new Error("Length must be a number");
    }
    if (typeof students !== array) {
      throw new Error("Students must be an array of strings")
    }
    for (const a of array) {
      if (typeof a !== str) {
        throw new Error("Students must be an array of strings");
      };
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
}