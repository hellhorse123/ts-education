const skill: readonly [number, string] = [1, "Dev"]; // пример использования, приходит конфигурация в виде массива, и мы не хотим, чтобы ее использовали

const skills: ReadonlyArray<string> = ["Dev", "Devops"];


// skill[0] = 2 - нельзя переприсваивать
// skills.push('asd') - нельзя пушить