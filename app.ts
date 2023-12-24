//отличие конструктора от обычных методов:
// - конструктор автоматически триггерится, когда мы используем new (тем самым вызываем конструктор и передаем туда параметр, указанный в конструкторе), после этого параметр присваивается инстансу нашего user
// - в результате конструктор должен всегда возвращать instance этого класса (в данном случае User). (нельзя переопределить возвращаемое значение)
// - конструктор не может принимать generic параметр (его может принимать класс)

// - конструктор можно сделать overload (имея описанную сигнатуру функции дополняем ее альтернативной сигнатурой)

class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }
    if (typeof age === "number") {
      this.age = age;
    } 
  }
}

const user = new User("Shan");
const user2 = new User();
const user3 = new User(33);
const user4 = new User("Ben", 34);
