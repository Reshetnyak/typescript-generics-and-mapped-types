class UserService {
  get USER_API_URL() {
    return 'https://api.myjson.com/bins/te31j';
  };
  getUser(id) {
    return fetch(this.USER_API_URL)
      .then(response => response.json());
  }
}
