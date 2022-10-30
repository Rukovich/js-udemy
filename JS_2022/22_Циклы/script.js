/*
Тема
*/
"Use strict";
/*
Цикл do-while
*/
// let num = 50;

// while(num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++; 
// }
// while (num < 55);

/*
Цикл for
*/

// for (let i = 1; i < 10; i++) {
//   if (1 === 6) {
//     break; // - останавливает цикл
//     // continue; - позволяет пропустить ненужный шаг
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
// } else {
//     console.log(i);
// }
// i++;
// }
// Место для пятой задачи

// Место для первой задачи
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// Задача. Выведите столбец чисел от 1 до 50.
// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Задача. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива
// let result = 1;
// let arr = [2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   result = result*arr[i];
//   console.log(result);
// }

// Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' 
// с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in 
// выведите на экран строки такого формата: 'Минск - это Беларусь.'.
// let obj = {
//   'Минск':'Беларусь', 
//   'Москва': 'Россия',
//   'Киев': 'Украина'
// };

// for (let key in obj) {
//   console.log(key + '- это ' + obj[key]);
// }