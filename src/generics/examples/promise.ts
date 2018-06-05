import { Category, User, Product } from "../../intro/types";

export enum ApiUrl {
  Users = 'http://users.api/get',
  Products = 'http://products.api/get',
  Categories = 'http://categories.api/get'
}

function get<R>(url: string): Promise<R> {
  return fetch(url).then(response => response.json());
}

class SomeService {
  getUsers(): Promise<Array<User>> {
    return get<Array<User>>(ApiUrl.Users);
  }
  getCategories(): Promise<Array<Category>> {
    return get<Array<Category>>(ApiUrl.Categories);
  }
}

const service = new SomeService();
service.getUsers().then(users => users[0].name);
service.getCategories().then(categories => categories[0]);
