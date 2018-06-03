import { User, Categories } from './../model';
const stringArr: Array<string> = ['1', '2', '3'];

const person = { name: 'Bob', age: 20 };

function getKeys<T extends object>(obj: T): Array<keyof T> {
  let keys: Array<keyof T> = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

// function getKeys<T, K extends keyof T>(obj: T): Array<K> {
//    return <Array<K>>Object.keys(obj)
// }
const personKeys = Object.keys(person);
const keys = getKeys(person);

//const keys = <Array<keyof typeof person>>Object.keys(person);

// [start] returned value
enum ApiUrls {
  Users = 'http://users.api/get',
  Products = 'http://products.api/get',
  Categories = 'http://categories.api/get'
}

function get<R>(url: string): Promise<R> {
  return <Promise<R>>fetch(url).then(response => response.json());
}

class SomeService {
  getUsers(): Promise<Array<User>> {
    return get<Array<User>>(ApiUrls.Users);
  }
  getCategories(): Promise<Categories> {
    return get<Categories>(ApiUrls.Categories);
  }
}

// [end] returned value

// function getValues<T>(obj: T): Array<T[keyof T]> {
//     const values: Array<T[keyof T]> = [];

//     for (const key in obj) {
//         values.push(obj[key]);
//     }

//     return values;
// }

// const values = getValues(person);