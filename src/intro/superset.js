var Role;
(function (Role) {
    Role[Role["Regular"] = 0] = "Regular";
    Role[Role["Admin"] = 1] = "Admin";
    Role["New"] = "Not recognized";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(role, nickName) {
        this.role = role;
        this.nickName = nickName;
        this.created = new Date();
    }
    return User;
}());
var Bob = new User(Role.New);
// Role = 'hello'; // error
// Role.Admin = 1; // error
