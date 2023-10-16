type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

type UserWithRole = User & Role;

// type UserWithRole = {
//   user: User;
//   role: Role;
// };

let user: UserWithRole = {
  name: "string",
  age: 22,
  skills: ["1", "2"],
  id: 1,
};
