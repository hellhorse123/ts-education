interface User {
  login: string;
  password?: string;
  // не тоже самое, что password: string | undefined (потому что в таком случае оно обязательно должно быть, но может быть неопределено)
}

const user: User = {
  login: "e@e.com",
  password: "1",
};

function multiply(first: number, second?: number): number {
  // в данном случае то же самое, что second: number | undefined , так как это функция
  if (!second) {
    return first * first;
  }
  return first * second;
}

function multiply2(first: number, second: number = 5): number {
  // тут дефолтное значение (если ничего не передадим - умножим на 5)
  if (!second) {
    return first * first;
  }
  return first * second;
}

interface UserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multiply(2);
}
