class User {
  role?: "admin" | "user";
  name!: string;

  constructor(name: string) {}
}

//warning при неиспользуемых параметрах
function createUser(user: User) {
  //logic

  // warning при поиске неиспользуемых переменных
  const defaultUser = new User("default");

  //error при присваивании undef необязательному свойству
  //   defaultUser.role = undefined;

  //не позволяет оставлять кейс без break/return
  switch (user.role) {
    case "admin":
      const a = 7;
    case "user":
      return true;
      //warning при недостежимом коде
      const c = 1;
  }
}

interface IChecks {
  [check: string]: boolean;
}

const c: IChecks = {};

//если обращаемся к нечетко заданному объекту может вернуть undefined
const d= c['drive'] 

//
// c.drive


class VipUser extends User{
    //включать override при наследовании   
    // override login(): void{}

}