import { getKeys } from './getKeys';
// Simpliest Generic is an Array
const names: Array<string> = ['1', '2', '3'];

export interface Person {
  name: string;
  age: number;
}

const people: Array<Person> = [{
  name: 'Bob',
  age: 22
}];

export const person = { name: 'Bob', age: 20 };

const objectKeys = Object.keys(person);

const keys =     getKeys<Person>(person);
const sameKeys = getKeys(person);
