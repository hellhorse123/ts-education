//имплементация классом интерфейса - это та связка, которая позволяет нам абстрагироваться от конкретной реализации и договориться предварительно о той форме или свойствах того или иного класса, которые нам необходимы

interface ILogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    //Кинуть во внешнюю систему
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error("Method not implemented.");
  }
  pay(paymentId: number): void {
    throw new Error("Method not implemented.");
  }
  price?: number | undefined;
}
