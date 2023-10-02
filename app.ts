function getFullName(userEntity: {
  firstName: string;
  lastName: string;
}): string {
  return `${userEntity.firstName} ${userEntity.lastName}`;
}

const user = {
  firstName: "firstName",
  lastName: "lastName",
  city: "feo",
  age: 33,
  skills: {
    dev: true, 
    devops: false, 
  }
};

console.log(getFullName(user));
