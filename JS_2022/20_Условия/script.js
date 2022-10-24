/*
Условия
*/

/*
Условия if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода
*/


"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('ERROR!');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

/*
Условия при помощи тернарного оператора.
1. Проверяем условие (num ===50);
2. Если (?) условие верно "console.log('Ok!')";
3. Выполняется действие "console.log('Error')".
*/
const num1 = 50;
(num1 ===50) ? console.log('Ok!') : console.log('Error');

/*
Условия с помощью switch case.
Конструкция case всегда идет на строгое сравнение.
*/
 
/*
логические операторы.
Результат лонических операций это логическое булевое значение.
*/
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries)); //true

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries)); //true