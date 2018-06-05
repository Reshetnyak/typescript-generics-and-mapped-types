import { Person } from '../interfaces';
import { getKeys } from './getKeys';

export const person: Person = { name: 'Bob', age: 20 };

const objectKeys = Object.keys(person);

const keys =     getKeys<Person>(person);
const sameKeys = getKeys(person);
