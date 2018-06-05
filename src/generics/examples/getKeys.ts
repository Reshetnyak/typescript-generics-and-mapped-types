import { person } from './index';
import { Person } from './setPerson';

export function getKeys<T>(obj: T): Array<keyof T> {
  let keys: Array<keyof T> = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

// a bit shorter variant
// function getKeys<T, K extends keyof T>(obj: T): Array<K> {
//    return <Array<K>>Object.keys(obj)
// }

// we can handle it without a function
// const keys = <Array<keyof typeof person>>Object.keys(person);


// step1: Take provided type of argument, or typeof obj if not
function getKeys1(obj: Person): Array<keyof Person> {
  let keys: Array<keyof Person> = [];
  for (const key in obj) {
    keys.push(key); // as keyof Person);
  }
  return keys;
}

// step2: Get keyof Person
type keyofPerson = keyof Person; // 'name' | 'age';
function getKeys2(obj: Person): Array<'name' | 'age'> {
  let keys: Array<'name' | 'age'> = [];
  for (const key in obj) {
    keys.push(key); // as keyof Person);
  }
  return keys;
}
