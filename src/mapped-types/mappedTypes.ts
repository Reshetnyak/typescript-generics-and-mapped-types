export interface Product {
    id: string;
    price: number;
    inStock: boolean;
}

type PartialProduct = Partial<Product>;

const mock: PartialProduct = {
    inStock: false
}