class User {
  name: string; //оп умолчанию в ts необходимо инициализировать свойства класса

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Shan");
console.log(user);
user.name = "Ben";
console.log(user);


//1) "strictPropertyInitialization": false in tsconfig
//2) ! for class prop
class Admin {
    role: number;
}
const admin = new Admin();

admin.role = 1
