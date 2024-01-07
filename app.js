"use strict";
class Controller {
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - не можем таким образом инстанцировать (создать экземпляр класса) абстрактный класс. Можем инстанцировать (создать экземпляр класса) только его наследников
new UserController().handle('12');
