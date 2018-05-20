import { User } from './model';

export class UserService {
  private USER_API_URL = 'https://api.myjson.com/bins/te31j';
  getUser(id: number): Promise<User> {
    return fetch(this.USER_API_URL)
      .then((response: Response) => response.json());
  }
}
