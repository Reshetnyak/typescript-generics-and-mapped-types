import { person, Person } from './index';
import { getKeys } from './getKeys';

function getValues<T>(obj: T): Array<T[keyof T]> {
  return getKeys(obj).map(k => obj[k]);
}

const values =     getValues<Person>(person);
const sameValues = getValues(person);

// Step 1: Use type of argument if no one was provided
type Values1 = Array<Person[keyof Person]>;

// Step 2: Get keyof Person
type keys = keyof Person;
type Values2 = Array<Person['name' | 'age']>;

// Step 3: Use type lookup for getting type of Persons value
type typeofName = Person['name'];
type typeofAge  = Person['age'];
type Values3 = Array<typeofName | typeofAge>;
