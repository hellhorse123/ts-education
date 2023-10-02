"use strict";
function getFullName(firstName, lastName) {
    // после скобочек - явно возвращаемый тип функции
    return `${firstName} ${lastName}`;
}
const getFullNameArrow = (firstName, lastName) => {
    // после скобочек - явно возвращаемый тип функции
    return `${firstName} ${lastName}`;
};
getFullName(true, false);
