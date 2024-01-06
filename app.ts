class UserService {
  static db: any;
  private static db2: any; // статичное свойство может быть приватным
//   static name: string = "12"; // ограничение статичного класса: не можем назвать переменную name

  static getUser(id: number) {
    return UserService.db.findById(id);
  }

  static async getUser2(id: number) {
    // можно использовать асинхронный код вместе со статиком
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    // this.create через ключ слово this доступен только метод create. Тогда как через обращение  UserService доступны все статические свойства
    UserService.db;
  }

  static {
    // await new Promise не можем использовать асинхронный код внутри статичного блока класса
    UserService.db = "png";
  }
}

UserService.db; //удобно при паттерне singleton.
UserService.getUser(1);

const inst = new UserService(1);
inst.create();
