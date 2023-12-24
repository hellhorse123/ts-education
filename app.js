"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("Shan");
console.log(user);
user.name = "Ben";
console.log(user);
