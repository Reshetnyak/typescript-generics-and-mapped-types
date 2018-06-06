import { Driver, Teacher, Person } from './interfaces';

export function isDriver(person: Person): person is Driver {
    return person.hasOwnProperty('categories') === true;
}

export function isTeacher(person: Person): person is Teacher {
    return person.hasOwnProperty('canTeach') === true;
}