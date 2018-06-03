const enum Role {
  Regular,
  Admin,
  New = 'Not recognized'
}

class User {
  created: Date = new Date();
  constructor(public role: Role, public nickName?: string) {}
}

const Bob = new User(Role.New);

Role = 'hello'; // error
Role.Admin = 1; // error
