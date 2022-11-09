/*

*/

/*
Превращаем в строку: to String
*/
// 1) typeof
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string

// 2) конкатинация
console.log(typeof(5 + '')); //string

// //Пример:
// const num = 5;
// console.log('https://vk.com/catalog/' + num);

// /*
// Превращаем в число: to mumber
// */

// // 1) typeof
// console.log(typeof(Number('4'))); //number

// // 2) унарный '+'
// console.log(typeof(+'5')); //number

// // 3) parseInt
// console.log(typeof(parseInt('15px', 10))) //number

// /*
// Превращаем в булиновое значение: to boolean
// */
// // Что является false: 0, '', null, undefined, NaN;
// // Все остальное - true;

// // 1) 
// let switcher = null;
// if (switcher) {
//     console.log('working...'); // не работает
// }

// switcher = 1;
// if (switcher) {
//     console.log('working...'); // работает
// }

// // 2) 
// console.log(typeof(Boolean('4'))); //Boolean

// // 3)
// console.log(typeof(!!'444')); //Boolean