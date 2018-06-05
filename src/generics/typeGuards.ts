import { Driver, Teacher } from './interfaces';

export function isDriver(obj: Driver | Teacher): obj is Driver {
    return obj.hasOwnProperty('categories');
}

export function isTeacher(obj: Driver | Teacher): obj is Teacher {
    return obj.hasOwnProperty('canTeach');
}