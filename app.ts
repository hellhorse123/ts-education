class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//inheritance
class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter((u) => u.name === name);
  }

  override toString(): string {
    return this.map((u) => u.name).join(", ");
  }
}

const users = new Users();
users.push(new User("Ben"));

//composition
class Users2 {
  users: User[];

  push(u: User) {
    this.users.push(u);
  }
}

//

class Payment {
  date: Date;
}

//inheritance
class UserWithPayment extends Payment {
  name: string;
}

//composition
class UserWithPayment2 {
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.payment = payment;
    this.user = user;
  }
}

//выводы:
//inheritance (наследование), когда использовать?
//1) Когда наследуемся в рамках одной доменной области. Например юзер с кредами и просто пользователь (доменная область - пользователь)
// Когда НЕ нужно использовать??
//Когда наследуемся от агрегационных сложных внутренних массивов (Array<User>), однако наследование от утилитарных классов (Error) допустимо.
//В остальных случаях лучше использовать композицию
