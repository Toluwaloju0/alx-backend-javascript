/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!(Array.isArray(students))) {
      throw TypeError('Students must be an array of strings');
    }
    for (const a of students) {
      if (typeof a !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(Array.isArray(students))) {
      throw TypeError('Students must be a array of strings');
    }
    for (const each of students) {
      if (typeof each !== 'string') {
        throw TypeError('Students must be a array of strings');
      }
    }
    this._students = students;
  }
}
