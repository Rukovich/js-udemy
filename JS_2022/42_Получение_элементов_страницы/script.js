/*

*/

/*
DOM - Объектная Модель Документа
*/

// //Старые методы:

// //Находим элемент по id
// const box = document.getElementById('box'); 

// // Получаем массив элементов по тегу
// const btns = document.getElementsByTagName('button');

// // Получаем конкретный элемент массива по тегу
// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// // Находим элемент по тегу
// const circles = document.getElementsByClassName('circle');


// //Современные методы:
// //Универсальный метод, ищет коллекцию по классам, тегам и тд
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// //данный метод имеет метод forEach

// hearts.forEach(item => {
//     console.log(item); //Выводит поочередно все элементы с классом в консоль
// });

// //Ищет первый элемент
// const hearts = document.querySelector('.heart');
// console.log(hearts);