/*

*/
const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);

/*
Методы classList
*/
// console.log(btns[0].classList.item(0)); //находит элемент по списку
// console.log(btns[1].classList.add('red', 'kakoitoClass')); //добавляет класс
// console.log(btns[0].classList.remove('blue')); //Удаляет класс blue
// console.log(btns[0].classList.toggle('blue')); //Переключатель. Удаляет / добавляет 

// contains- проверяет наличие класса на определенном элемеенте и возвращает булиновое значение
// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }
  ////Или можно так:
  // btns[1].classList.toggle('red');
// });

/*
Делегирование событий
*/
wrapper.addEventListener('click', (event) =>  {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log('hello');
  }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

//