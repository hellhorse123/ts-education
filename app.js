"use strict";
class Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id); // означает, что мы обращаемся к конструктору класса Payment и начинаем его конструировать с указанным выше идентификатором.
    }
    save() {
        //save in DB
    }
    pay(date) {
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
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
new Admin(); //name = user
