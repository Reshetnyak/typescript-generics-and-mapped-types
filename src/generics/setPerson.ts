import { Person, Teacher, Driver } from './interfaces';
import { isDriver, isTeacher } from './typeGuards';

function setPerson<T extends Person>(person: T): void {
  // if driver, validate categories
  if (person.categories) {
    let isValid = ['A', 'B', 'C', 'D'].some(c => person.categories.includes(c) );
    // save to database
  } else {
    // save teacher to database
  }
}

const teacher: Teacher = {
  name: 'Jane',
  age: 22,
  canTeach: true
}

const driver: Driver = {
  name: 'Bob',
  age: 33,
  categories: ['A','B','C']
}

setPerson(teacher);
setPerson(driver);
