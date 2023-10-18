function logId(id: string | number): void {
  console.log(id);
}

const a = logId(1);

function multiply(f: number, s?: string) {
  //если внутри функции мы хоть где-то что-то возвращаем, то она будет alias между тем что мы вернули и undefined, иначе void
  if (!s) {
    return f * f;
  }
}

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => {
  //такая запись с типом функции void означает, что мы можем вернуть все что угодно, но оно будет игнорироваться.
  return true;
};

const b = f2(); // b - это void

const skills = ["Dev", "DevOps"];

const user = {
  s: ["s"],
};

skills.forEach((skill) => user.s.push(skill));
