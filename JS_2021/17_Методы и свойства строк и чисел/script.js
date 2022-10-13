
"use strict";

/*
СТРОКИ:
.lenght- кол-во символов или эл-в внутри массива;
string mda-документация.

console.dir- выводит элемент в виде объекта;

.toUpperCase- Изменение регистра в верхний;
.toLowerCase- Изменение регистра в нижний;

.indexOf()- метод позволяет найти кусок строки и подсказывает с какой позиции 
начинается (поиск подстроки);

.slice()- Вырезает строку;

ЧИСЛА:
Math. -Команда в браузере показывает методы числа; 
parseInt()- Переводит число в другую систему измерения;
*/

const str = 'teSt';
const arr = [1, 2, 4];

// получаем 3-ю букву из строки
console.log(str[2]);

//Изменение регистра
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//Поиск подстроки .indexOf()
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

//Вырезает строку .slice; 
const logg = 'Hello world!';
console.log(logg.slice(6, 11));

const logg1 = 'Hello world!';
console.log(logg1.substr(6, 5));


//ЧИСЛА

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); //Берет число или строко и возвращает в десятичном;