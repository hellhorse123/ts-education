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

interface Admin {
  name: string;
  role: number;
}

function LogId(id: string | number) {
  if (typeof id === "string") {
    console.log(id); //string
  } else {
    console.log(id); //number
  }
}

function isString(x: string | number): x is string {
  return typeof x === "string";
}

function LogIdGuard(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

//___

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("user is not admin");
  }
}


// Type Guard позволяет оградить поток от ненужных типов