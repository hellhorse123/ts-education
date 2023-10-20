function generateError(mes: string): never {
  throw new Error(mes);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

type paymentAction = "refund" | "checkout";
//  | 'reject'; - при добавлении нового кейса reject, в compiled тайме у нас возникнет ошибка string не равно never, что позволит нам сразу отловить ошибку и включить юзкейс

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      //...
      break;
    case "checkout":
      //...
      break;
    default:
      const _: never = action;
      throw new Error("нет такого action");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return true;
  }
  generateError("errrrr");
}
