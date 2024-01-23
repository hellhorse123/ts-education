function test(a: any) {} // явная проверка на any

//строгая проверка на null
function test1(a: number): number | undefined {
  if (a > 0) {
    return a;
  }
}

/* проверка на типы функции */
function test2(a: number): number {
  return a;
}

type StrOrNumFunc = (a: number | string) => number;
// let f: StrOrNumFunc = test2

//  проверка аргументов в функцию в соответствии с сигнатурой функции
// test2.apply(undefined, [1, 3]);

class A {
  b!: number;

  test() {
    return function () {
      /* Проверка обращения this  */
      // this.b = 5;
    };
  }
}

try {
} catch (e) {
    // e = unknown instead of any 
//   console.log(e.message);
}
