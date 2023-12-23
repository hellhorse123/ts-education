interface User {
  name: string;
}

const a = {};

assertUser(a);

a.name = "Ben";

//asserts - способ сказать TS, чо в рамках функции ниже мы производим проверку, что объект является юзером
function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === "object" && !!obj && "name" in obj) {
    return;
  }
  throw new Error('not a user')
}

// Обычная проверка объекта
// function assertUser(obj: unknown): obj is User {
//   if (typeof obj === "object" && !!obj && "name" in obj) {
//     return true;
//   }
//   return false;
// }

// if(assertUser(a)){
// a.name = "Ben";
// }
