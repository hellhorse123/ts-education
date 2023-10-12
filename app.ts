enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = "p",
  FAILED = "f",
}

const res = {
  message: "Платеж успешен",
  statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(1);

function compute() {
  return 3;
}

enum Roles {
  ADMIN,
  USER = compute(), // можно поставить расчет, произведенный во время компиляции
}

function test(x: { ADMIN: number }) {}

test(Roles);
