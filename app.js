function getFullName(userEntity) {
    return "".concat(userEntity.firstName, " ").concat(userEntity.lastName);
}
var user = {
    firstName: "firstName",
    lastName: "lastName",
    city: "feo",
    age: 33,
};
console.log(getFullName(user));
