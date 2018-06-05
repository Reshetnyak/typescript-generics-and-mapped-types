import { Category, User, Product } from "../../intro/types";

enum ApiUrls {
  Users = 'http://users.api/get',
  Products = 'http://products.api/get',
  Categories = 'http://categories.api/get'
}

function get<R>(url: string): Promise<R> {
  return fetch(url).then(response => response.json());
}

class SomeService {
  getUsers(): Promise<Array<User>> {
    return get<Array<User>>(ApiUrls.Users);
  }
  getCategories(): Promise<Array<Category>> {
    return get<Array<Category>>(ApiUrls.Categories);
  }
}

const service = new SomeService();
service.getUsers().then(users => users[0].name);
service.getCategories().then(categories => categories[0]);
