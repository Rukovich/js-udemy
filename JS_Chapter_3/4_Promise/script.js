// 'use strict';

// //then() - 
// //catch() -
// //finally() -

// //Promise.all() - 
// //Promise.race() -

// console.log('Запрос данных');
 
// const req = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'TV',
//       price: 2000
//     };

//     //передаем данные
//     resolve(product);
//   }, 2000);
// });

// //Обрабатывает положительный результат
// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   }).then(data => { //Используем промис
//     data.modify = true;
//     return data;
//   }).then((data) => {
//     console.log(data);
//   });
// }).catch(() => { //В случае ошибки
//   console.error('Произошла чудовищная ошибка');
// }).finally(() => { //В любом случае
//   console.log('Finally');
// });

