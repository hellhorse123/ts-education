"use strict";
class Notify {
    send(template, to) {
        console.log(`Send ${template} to ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [{ name: "other", template: "<h1>Temp</h1>" }];
    }
    getByName(name) {
        return this.templates.find((t) => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log("Not found template");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Template was send");
    }
}
const a = new NotificationFacade();
a.send("a@a.ru", "other");
