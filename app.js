"use strict";
class UserBuilder {
    setName(name) {
        // :this  - мы возвращаем этот объект
        this.name = name;
        return this;
    }
    isAdmin() {
        // typeguard, который проверяет, что этот объект является AdminBuilder
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
    constructor() {
        super(...arguments);
        this.roles = [];
    }
}
const res = new UserBuilder().setName("Ben"); // const res: UserBuilder
const res2 = new AdminBuilder().setName("Ben"); // const res2: AdminBuilder. если заменить :this на :UserBuilder , то будет res2: UserBuilder. Это коллизия
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
