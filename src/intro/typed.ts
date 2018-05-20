// [start] js versions
function toPixelsString(num) {
  return num + 'px';
}

const people = [
  {name: 'Joe', age: 22},
  {name: 'Jane', age: 33}
]
// [end] ts versions

// [start] ts versions
function toPixelsStringTs(num: number): string {
  return num + 'px';
}

interface Person {
  name: string;
  age: number;
}

const peopleTs: Array<Person> = [
  {name: 'Joe', age: 22},
  {name: 'Jane', age: 33}
]
// [end] ts versions
