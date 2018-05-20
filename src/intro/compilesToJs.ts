const enum Categories {
  Laptops,
  Phones,
  Tablets
}

interface Product {
  id: number;
  name: string;
  category: Categories
}

interface User {
  id: number;
  name: string;
  product: Product;
}

class UserService {
  private USER_API_URL = 'https://api.myjson.com/bins/te31j';
  getUser(id: number): Promise<User> {
    return fetch(this.USER_API_URL)
      .then((response: Response) => response.json());
  }
}

class Component {
  user: User;
  constructor(private userService: UserService) { }
  async onInit(): Promise<void> {
    this.user = await this.userService.getUser(1);
  }
}
