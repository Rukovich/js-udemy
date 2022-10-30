/*
Функции
*/
/*
Синтаксис функции
*/
// function showFirstMessage() { //(..) -Передаем аргументы функции
//   console.log('Hello world!'); //Тело функции
// }
// showFirstMessage(); //Вызов функции

/*
Функция ниже возьмет аргумент 'hello world!', подставит вместо аргумента text и передаст в тело функции
*/
// function showFirstMessage(text) {
//   console.log(text); 
// }
// showFirstMessage('Hello world!'); //Hello world!

/*
Аргументов функции может быть бесконечное количество
*/
// function showFirstMessage(text, arg, num) {
//   console.log(text); 
//   console.log(arg); 
//   console.log(num); 
// }
// showFirstMessage('Hello world!', '50', 'qwe');

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text); 
//   num = 10;
// }
// showFirstMessage('Hello world!');
// console.log(num);

/*
команда return - прекращает действие функции
*/
// Например, когда запустится функция calc она ювернет сумму 1 и 2 аргумента
// function calc(a, b) {
//   return (a + b);
// }
// console.log(calc(5, 10)); //15
// console.log(calc(10, 20)); //30

//return может так же может возвращать значение своей локальной переменной в глобальную область видимости
function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum); //50

/*
Function declaration
- Классическая запись функции, существует еще до того, как код запустится.
*/

/*
Function expression
- функциональное выражение. 
Главное отличие в том, что она создается тольок тогда, когда до нее доходит кусок кода и ее можно вызвать
только после объявления
*/
const logger = function() {
  console.log('hello!');
};
logger();

/*
Стрелочные функции
Появились в стандарте ES6.
Такая функция не имеет контекста вызова,
*/
const calc = (a, b) => a + b;

const calc1 = (a, b) => {
  console.log('1');
  return a + b;
};
