"use strict";
class User {
    // getLogin(l: string) {
    //   this.login = `user-${l}`;
    // }
    //реализация сеттера
    set login(l) {
        this._login = `user-${l}`;
    }
    //реализация геттера
    get login() {
        return 'no_login';
    }
}
const user = new User();
// user.login = `user-...` Так мы бы присваивали без геттера, но ООП предполагает, что логин должен бть инкапсулирован внутрь юзера
user.login = "myLogin";
console.log(user);
console.log(user.login);
