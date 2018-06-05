// simple types
let something: any; // is by default if type is omitted

const num: number = 1;
const nan: number = NaN;
const meaningOfLife: 42 = 42;

const str: string = 'hello';
const specificStr: 'specyficString' = 'specyficString';

const isEven: boolean = num % 2 === 0;
const isAdmin: false = false;
const isNumber: true = true;

const notFound: null = null;

let a: undefined;
a = void 0;
a = undefined;

function greet(): void { // functions which return undefined need to mark as void
  console.log('Hi there!');
}

function withError(): never { // function won't return anything because of error.
  throw new Error(`Ooooops`);
}

// [start] object type
// be carefull with the object type. It's not really descriptive
function expectsAnObject(obj: object): void {}

expectsAnObject({});
expectsAnObject([]);
expectsAnObject(Array);
expectsAnObject(function any() {});
expectsAnObject(/someRegExp/g);
expectsAnObject(undefined);
expectsAnObject(null);
expectsAnObject(new Map());
expectsAnObject(new Set([1,2,2]));
expectsAnObject(true); // error
expectsAnObject(1); // error
expectsAnObject('string'); // error
expectsAnObject(Symbol()); // error
// [end] object type

// complex types

export const enum Category { // will not be put in transpiled code
  Phone,
  Tablet,
  Laptop,
  None = 'uncategorised'
}

export interface Product {
  name: string;
  category: Category;
}

export interface User {
  name: string;
  age: number;
}

const alcatel: Product = {
  name: 'Alcatel X',
  category: Category.Phone
}

type ProductWithId = Product & {id: string};
