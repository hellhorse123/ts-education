"use strict";
// В JS this ссылается на контекст текущего объекта
class Payment {
    constructor() {
        this.date = new Date();
        //второй способ не терять контекст - использовать стрелочные функции:
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
    getDate1() {
        // спец параметр this, который явно указывает, к чему принадлежит контекст (не существует после компиляции, является "подсказкой для ts")
        return this.date;
    }
}
const p = new Payment();
console.log(p.getDate());
const user = {
    id: 1,
    //   paymentDate: p.getDate, // undefined - был потерян контекст. Cослались на getDate, который возвращает this.date . Соответственно this в контексте объекта user, это и есть этот user (поэтому мы никаким образом не можем обратиться к тому, что это был Payment)
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
};
console.log(user.paymentDate());
console.log(user.paymentDateArrow());
class PaymentPersistent extends Payment {
    save() {
        return super.getDate();
    }
}
console.log(new PaymentPersistent().save());
