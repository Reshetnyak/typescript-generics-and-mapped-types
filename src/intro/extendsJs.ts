// decorators http://www.typescriptlang.org/docs/handbook/decorators.html
import "reflect-metadata";

interface Product { // could be a class also
  id: string;
  name: string;
}

export class User {
  constructor(public name: string, public age: number) {}
  private _product: Product;

  @validate('Product')
  set product(value: Product) { this._product = value; }
  get product() { return this._product; }
}

interface ValidateFn<T> {
  (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
  ): void
}

function validate<T>(typeName: string): ValidateFn<T> {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
  ): void => {
    const set = descriptor.set;
    descriptor.set = function (value: T) {
      const type = Reflect.getMetadata("design:type", target, propertyKey);
      if (!(value instanceof type)) {
        throw new TypeError(`Invalid type. Expected: ${typeName}, but provided: ${typeof value}`);
      }
      set(value);
    }
  }
}

export const user = new User('bob', 22);
