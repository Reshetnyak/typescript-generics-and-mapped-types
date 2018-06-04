enum ApiUrls {
  Users = 'http://users.api/get',
  Products = 'http://products.api/get',
  Categories = 'http://categories.api/get'
}

function get<R>(url: string): Promise<R> {
  return fetch(url).then(
    response => response.json() as Promise<R>
  );
  // return <Promise<R>>fetch(url).then(
  //   response => response.json()
  // );
}

interface User {
  name: string;
  age: number;
}

class SomeService {
  getUsers(): Promise<Array<User>> {
    return get<Array<User>>(ApiUrls.Users);
  }
}