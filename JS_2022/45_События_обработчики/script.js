// /*

// */




// //addEventListener() - Добавляем обработчик событий
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     console.log('click')
// })

// //Удаляем элемент с помощью  event.target
// //target - элемент на котором произошло событие
// const btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {
//     event.target.remove();
// })


// //Вызываем функцию по клику и удаляем элемент
// const deleteEl = (el) => {
//     el.target.remove();
// }
// btn.addEventListener('click', deleteEl);

// // Назначаем обработчик событий на все элементы btns
// const btns = document.querySelectorAll('button');
// btns.forEach( btn => {
//     btn.addEventListener('click', deleteEl);
// })