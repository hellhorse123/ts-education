class UserBuilder {
  name: string | undefined;
  setName(name: string): this {
    // :this  - мы возвращаем этот объект
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    // typeguard, который проверяет, что этот объект является AdminBuilder
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[] = []; // если удалить эту строку, то классы будут "как-бы одинаковыми". И проверка let user вернет let user: UserBuilder | AdminBuilder. это происходит, так как UserBuilder и AdminBuilder по своей структуре полностью совпадают. А в runTime у нас типов нет
}

const res = new UserBuilder().setName("Ben"); // const res: UserBuilder
const res2 = new AdminBuilder().setName("Ben"); // const res2: AdminBuilder. если заменить :this на :UserBuilder , то будет res2: UserBuilder. Это коллизия

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user); // let user: AdminBuilder
} else {
  console.log(user); //let user: UserBuilder
}
