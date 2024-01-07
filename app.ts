// В JS this ссылается на контекст текущего объекта

class Payment {
  private date: Date = new Date();

  getDate() {
    return this.date;
  }

  getDate1(this: Payment) {
    // спец параметр this, который явно указывает, к чему принадлежит контекст (не существует после компиляции, является "подсказкой для ts")
    return this.date;
  }

  //второй способ не терять контекст - использовать стрелочные функции:
  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();
console.log(p.getDate());

const user = {
  id: 1,
  //   paymentDate: p.getDate, // undefined - был потерян контекст. Cослались на getDate, который возвращает this.date . Соответственно this в контексте объекта user, это и есть этот user (поэтому мы никаким образом не можем обратиться к тому, что это был Payment)
  paymentDate: p.getDate.bind(p), // рабочий вариант с bind
  paymentDateArrow: p.getDateArrow,
};

console.log(user.paymentDate());
console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
  save() {
    // return super.getDate(); - работает корректно
    // return super.getDateArrow(); - не работает, getDateArrow - не функция. Когда пытаемся обратиться к getDateArrow, мы используем наследование. Так как в прототипе наследования у нас нет этой функции, то мы никак не можем получить ее из исходного объекта. В исходном прототипе из-за наследования мы можем получить обычную функцию, но не можем получить стрелочную функцию
    return this.getDateArrow(); // - снова работает корректно.
  }
}

console.log(new PaymentPersistent().save());
