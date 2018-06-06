// Simpliest Generic is an Array
const names: Array<string> = ['Bob', 'Mary', 'Jane'];;

interface MyArray<T> {
  push(...items: T[]): number;
}

// step1: more descriptive name
interface MyArray1<Type> {
  push(...items: Type[]): number;
}

let arr: MyArray<string>;

// step2: Use provided type instead of variable
interface MyArray2 {
  push(...items: string[]): number;
}