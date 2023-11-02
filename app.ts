let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf(); //с большой буквы - interface конструктора для строки (он уже является объектом)
let e1: boolean = new Boolean(a).valueOf();

let c = "asd";
let d: number = +c;
let d1: number = parseInt(c);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: "Vasya",
  email: "vas@mail.ru",
  login: "vasasas",
};

const user2 = {
  name: "Vasya",
  email: "vas@mail.ru",
  login: "vasasas",
} as User; //равносильно первой записи

const user3 = <User>{
  name: "Vasya",
  email: "vas@mail.ru",
  login: "vasasas",
}; // могут быть проблемы такой записи в React , так как <> зарезервировано как компонент JSX.Element

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...user,
  role: 1,
}; // при преобразовании в js,  у админа будут лишние свойства (email, login), что может вызвать нежелательные сайд эффекты

function userToAdmin(user: User): Admin {
  return {
    name: user.login,
    role: 1,
  };
} // явное преобразование, которое сохраняет только необходимые поля
