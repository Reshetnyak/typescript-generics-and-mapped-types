export interface Person {
    name: string;
    age: number;
}

export interface Teacher extends Person {
    canTeach: true;
}

export interface Driver extends Person {
    categories: Array<string>;
}
