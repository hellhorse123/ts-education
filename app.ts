class User {
  skills: string[];
  addSkills(skill: string): void;
  addSkills(skills: string[]): void;
  addSkills(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else if (typeof skillOrSkills === "object") {
      this.skills.concat(skillOrSkills);
    }
  }
}

// new User().addSkills() string or array

function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
  // должно совпадать по типам не только то, что мы вводим в функцию как параметр, но  и то, что выводим
  if (typeof distance === "number") {
    return 1;
  } else {
    return "";
  }
}

// run() string or number
