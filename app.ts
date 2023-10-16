interface User {
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
}

interface Role {
  roleID: number;
}

interface UserWithRole extends User, Role {
  createdAt?: Date;
}

type User2 = {
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
};

let user: UserWithRole = {
  name: "string",
  age: 22,
  skills: ["1", "2"],
  roleID: 1,
  log(id) {
    return "";
  },
};

interface UserDictionary {
  [index: number]: User;
}

type UserDictionary2 = {
  [index: number]: User;
};
