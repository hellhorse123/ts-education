"use strict";
class Controller {
    //абстрактные методы могут использоваться только в абстрактных классах
    handleWithLogs(req) {
        console.log("start");
        this.handle(req);
        console.log("end");
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - не можем таким образом инстанцировать (создать экземпляр класса) абстрактный класс. Можем инстанцировать (создать экземпляр класса) только его наследников
const c = new UserController();
