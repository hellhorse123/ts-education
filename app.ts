abstract class Controller {
  abstract handle(req: any): void; // при инстанцировании наследника, необходимо будет реализовать этот абстрактный метод в соответсвии с описанной тут сигнатурой
//абстрактные методы могут использоваться только в абстрактных классах
  handleWithLogs(req: any) {
    console.log("start");
    this.handle(req);
    console.log("end");
  }
}

class UserController extends Controller {
  handle(req: any): void {
    console.log(req);
  }
}

// new Controller() - не можем таким образом инстанцировать (создать экземпляр класса) абстрактный класс. Можем инстанцировать (создать экземпляр класса) только его наследников

const c = new UserController()
