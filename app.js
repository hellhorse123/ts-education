"use strict";
/*
Функция принимает массив объектов и его ключ, производит группировку по указанному ключу и возвращает сгруппированный объект
Пример:
[
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
]

После группировки:
{
    '1': [{group: 1, name: 'a'}, {group: 1, name: 'b'}]
    '2': [{group: 2, name: 'c'}]
}
*/
const data = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
];
function groupData(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res = groupData(data, 'group');
console.log(res);
