class Notify {
  send(template: string, to: string) {
    console.log(`Send ${template} to ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: "other", template: "<h1>Temp</h1>" }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }

  send(to: string, templateName: string) {
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
