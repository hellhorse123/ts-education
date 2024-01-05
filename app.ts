type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); // означает, что мы обращаемся к конструктору класса Payment и начинаем его конструировать с указанным выше идентификатором.
  }

  save() {
    //save in DB
  }

  override pay(date?: Date) {
    // pay(date?: Date) {
    super.pay();
    // this.status = "paid"; вместо явного дублирования используем super как ссылку
    if (date) {
      this.paidAt = date;
    }
  }
}

new PersistedPayment();

class User {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = "admin";

  constructor() {
    super(); // super должен вызываться вначале конструктора из-за того, что мы обращаемся к свойству класса
    console.log(this.name); //name = admin
  }
}

new Admin(); //name = user

new Error("");

class HttpError extends Error {
  code: number;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
