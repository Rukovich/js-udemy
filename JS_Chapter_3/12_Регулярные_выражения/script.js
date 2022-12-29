"use strict";
//serach() - выдает первую позицию по которой находит определенный резултьтат
// const ans = prompt("Введите ваше имя");
// console.log(ans.search(/n/));

//match() - получаем результат в виде массива
// const ans = prompt("Введите ваше имя");
// console.log(ans.match(/n/)); //['n', index: 1, input: 'ann', groups: undefined]

//replace() - помещает в себя 2 аргумента: что мы заменяем и на что заменяем
// const ans = prompt("Ваш пароль");
// console.log(ans.replace(/./g, "*")); //****

//меняем - на :
// console.log("12-34-56".replace(/-/g, ":")); //12:34:56

//test() - Метод regexp.test(str) проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false.
// const ans = prompt("Введите ваше имя");
// const reg = /n/gi;
// console.log(reg.test(ans)); //tru или false

//
// const ans = prompt("Введите число");
// const reg = /\d/;
// console.log(ans.match(reg)); //tru или false

//Примеры

// const str = "My name is R2D2";
// console.log(str.match(/\w\d\w\d/)); //R2D2
