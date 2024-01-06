class Vehicle {
  public make: string; // по-умолчанию public, свойство можно не писать
  private damages: string[]; // модификатор private работает только в TS, после компиляции в JS он пропадет
  private _model: string;
  protected run: number;
  #price: number; // приватное свойство в языке JS. При компиляции оно останется приватным
  //# на фронте использовать, когда хотим скрыть поле от внешних взаимодействий (например расширения Сhrome)

  private addDamage(damage: string) {
    this.damages.push(damage);
  }

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    this.#price === v.#price; // проверка эквивалентности приватных свойств
  }
}

new Vehicle().make = "d"; // можем модифицировать это свойство
// new Vehicle().damages = "d"; НЕ можем модифицировать напрямую это свойство

class EuroTruck extends Vehicle {
  setDamage() {
    //this.damages не можем обратиться к приватным свойствам класса Vehicle, даже с учетом того, что мы от него наследуемся
  }
  setRun(km: number) {
    this.run = km / 0.62; // можем обращаться к protected свойству через наследование, однако извне класса все еще не модем вызывать его
  }
}

//выводы:
// мoдификаторы доступны не только для свойств, но и для функций
