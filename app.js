"use strict";
function generateError(mes) {
    throw new Error(mes);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case "refund":
            //...
            break;
        case "checkout":
            //...
            break;
        default:
            const _ = action;
            throw new Error("нет такого action");
    }
}
let a = 1 + 2;
function asd(a) {
    switch (a) {
        case 3:
        case 4:
            console.log("В точку!");
        case 5:
            console.log("Перебор");
        default:
            console.log("Нет таких значений");
    }
}
console.log(asd(a));
