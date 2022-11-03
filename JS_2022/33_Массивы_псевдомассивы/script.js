/*
Тема
*/

// const arr = [1, 2, 3, 6, 8];

//Удаляет последний элемент
/*
arr.pop();
console.log(arr); // [ 1, 2, 3, 6 ]
*/

//Добавляет элемент в конец массива
/*
arr.push(10);
console.log(arr); // [ 1, 2, 3, 6, 8, 10 ]
*/

//Перебирает массив
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//Второй способ перебора
// for (let value of arr) {
// console.log(value);
// }

//метод for each
// Проходится по каждому элементу массива, принимает в себя коллбэк функцию

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`)
// })
//вывод в консоль:
// 0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8


//Метод split
//В примере ниже формирует массив, на основании строк введенных пользователем
// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products); // ['qqq', 'www', 'eee']

//Метод join
//В примере ниже мы склеиваем введенные значения массива через ;
// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products.join('; ')); //qqq; www; eee

//Метод sort
//Сортирует массив как строку
//С помощью колбэк функции можем передать как именно нужно сортировать массив

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr); // [2, 8, 10, 13, 26]

// function compareNum(a, b) {
//   return a - b;
// }

