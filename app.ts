let input: unknown;

input = 3;
input = ["as", "asd"];

// при типе unknown мы не сможем присвоить/положить в другую переменную, где задан тип (пока не укажем тип)
// let res: string = input;

function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    await fetch("");
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
//вторая проверка хуже, так как мы явно приводим ошибку к Error (а такого может не быть)
async function getDataForce() {
  try {
    await fetch("");
  } catch (error) {
    const e = error as Error;
    console.log(e.message);
  }
}


type U1 = unknown | null; // все, что юнион тип с unknown всегда становится unknown

type I1 = unknown & string; // intersection с unknown и любого другого типа дает этот тип