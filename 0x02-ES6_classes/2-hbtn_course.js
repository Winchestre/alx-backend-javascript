export default class HolbertonCourse {
  constructor(name, length, students) {
    this._typeChecker(name, 'string', 'Name');
    this._typeChecker(length, 'number', 'Length');
    this._typeChecker(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._typeChecker(name, 'string', 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._typeChecker(length, 'number', 'Length');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._typeChecker(students, 'array', 'Students');
    students.map((student) => this._typeChecker(student, 'string', 'Students'));
    this._students = students;
  }

  _typeChecker(value, type, name, error) {
    let message = error;
    if (!message) {
      switch (type) {
        case 'string':
          message = `${name} must be a string`;
          break;
        case 'number':
          message = `${name} must be a number`;
          break;
        case 'array':
          message = `${name} must be an array of strings`;
          break;
        default:
          message = 'Invalid Type';
      }
    }

    if (type === 'array') {
      if (!Array.isArray(value) || !value.every((item) => typeof (item) === 'string')) {
        throw new TypeError(message);
      }
    } else if (typeof (value) !== type) {
      throw new TypeError(message);
    }
  }
}
