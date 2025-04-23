"use strict";
class Form {
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }
    log(data) {
        console.log(data);
    }
}
class FirstApi extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(`Sending ${data}`);
    }
}
class SecondApi extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(`Sending ${data}`);
    }
}
const form1 = new FirstApi();
form1.save(new Form("Vasya"));
const form2 = new SecondApi();
form2.save(new Form("Vasya"));
