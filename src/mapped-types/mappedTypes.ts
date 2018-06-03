enum Occupations {
    Teacher = 'teacher',
    Driver = 'Driver'
}

interface Person {
    name: string;
    age: number;
}

interface Teacher extends Person {
    occupation: Occupations.Teacher;
}

interface Driver extends Person {
    occupation: Occupations.Driver;
}

type PartialDriver = Partial<Driver>;

type Employee = Teacher | Driver;


type MyPartial<T> = {
    [P in keyof T]?: T[P];
};
// step 1: More readable names
type MyPartialStep1<Type> = {
    [Property in keyof Type]?: Type[Property];
};
// step 2: Put provided type
type MyPartialStep2 = {
    [Property in keyof Driver]?: Driver[Property];
};
// step 3: Take keys of Driver
type DriversKeys = keyof Driver; // "name" | "age" | "occupation";
type MyPartialStep3 = {
    [Property in "name" | "age" | "occupation"]?: Driver[Property];
};
// step 4: Iterate trough keys and change variable to key
type MyPartialStep4 = {
    ["name"]?: Driver["name"];
    ["age"]?: Driver["age"];
    ["occupation"]?: Driver["occupation"];
};
// step 5: Set optional modifier to the property
type MyPartialStep5 = {
    name?: Driver["name"];
    age?: Driver["age"];
    occupation?: Driver["occupation"];
};