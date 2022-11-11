// /*

// */

// /*
// Меняем свойство стиля элементов
// */

// const box = document.getElementById('box');
// const btns = document.getElementsByTagName('button');
// const circles = document.getElementsByClassName('circle');
// const hearts = document.querySelectorAll('.heart');
// const oneHeart = document.querySelector('.heart');

// //Изменяем стили у элемента
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// btns[1].style.borderRadius = '100%';

// //Изменяем стиль элемента текстом
// box.style.cssText = 'background-color: blue; width: 500px'
// //или так:
// const color = 'blue';
// const size = '500px'
// box.style.cssText = `background-color: ${color}; width: ${size}`;


// //С помощью цикла изменяем цвета у элементов
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = blue;
// }

// //Делаем то же самое с помощью цикла forEach
// hearts.forEach(item => {
//     item.style.backgroundColor = blue;
// });

// // Создаем элементы с помощью JS

// //createElement - метод создает элемент
// const div = document.createElement('div')

// //Добавляем текст
// const text = document.createTextNode('Тут был я');

// //Создаем и добавляем элемент на страницу под тегом body с помощью метода append
// div.classList.add('black');
// document.body.append(div);

// //Помещаем элемент div в обертку wrapper
// document.querySelector('.wrapper').append(dev);

// //метод prepend помещает элемент в начало родителя
// document.querySelector('.wrapper').prepend(dev);

// //методы before и after делают то же самое

// //remove()- удаляет элементы со страницы
// circles[0].remove();

// //replaceWith- Заменяет один элемент на другой
// hearts[0].replaceWith(circles[0]);

// //Методы для добавления элементов на страницу

// //innerHTML
// div.innerHTML = '<h1> hello World </h1>'

// //textContent
// div.textContent = 'hello World' //Работает только с текстом