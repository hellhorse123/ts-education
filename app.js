"use strict";
const skills = ["Dev", "Devops", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((s) => s !== "Devops")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
console.log(res);
