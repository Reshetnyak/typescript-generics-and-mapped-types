import { Product } from './mappedTypes';

type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

// step 1: More readable names
type MyPartialStep1<Type> = {
    [Property in keyof Type]?: Type[Property];
};
// step 2: Put provided type
type MyPartialStep2 = {
    [Property in keyof Product]?: Product[Property];
};
// step 3: Take keys of Product
type ProductKeys = keyof Product; // 'id' | 'price' | 'inStock';
type MyPartialStep3 = {
    [Property in 'id' | 'price' | 'inStock']?: Product[Property];
};
// step 4: Iterate trough keys and change variable to key
type MyPartialStep4 = {
    ['id']?: Product['id'];
    ['price']?: Product['price'];
    ['categories']?: Product['inStock'];
};
// step 5: Set optional modifier to the property
type MyPartialStep5 = {
    id?: Product['id'];
    price?: Product['price'];
    inStock?: Product['inStock'];
};
// step 6: Using type lookup, get type of Product value
type MyPartialStep6 = {
    id?: string;
    price?: number;
    inStock?: boolean;
};
