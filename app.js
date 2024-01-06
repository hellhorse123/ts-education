"use strict";
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // приватное свойство в языке JS. При компиляции оно останется приватным
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
    set model(m) {
        this._model = m;
    }
    get model() {
        return this._model;
    }
}
_Vehicle_price = new WeakMap();
new Vehicle().make = "d"; // можем модифицировать это свойство
// new Vehicle().damages = "d"; НЕ можем модифицировать напрямую это свойство
class EuroTruck extends Vehicle {
    setDamage() {
        //this.damages не можем обратиться к приватным свойствам класса Vehicle, даже с учетом того, что мы от него наследуемся
    }
    setRun(km) {
        this.run = km / 0.62; // можем обращаться к protected свойству через наследование, однако извне класса все еще не модем вызывать его
    }
}
//выводы:
// мoдификаторы доступны не только для свойств, но и для функций
