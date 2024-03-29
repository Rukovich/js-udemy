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
// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum); //50

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
// const calc = (a, b) => a + b;

// const calc1 = (a, b) => {
//   console.log('1');
//   return a + b;
// };

/*
Задачки:
*/
/*
1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 
В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return.
P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
*/
function sayHello(name) {
  return `Привет, ${name} !`
}
sayHello('Антон')


/*
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа 
и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
*/

function returnNeighboringNumbers(num) {
return [num - 1, num, num + 1];
}
returnNeighboringNumbers (5)

/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
(Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - 
то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20

Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
роверять их и продумывать логику работы внутри. 
Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
Если первый аргумент 5, а второй 3, то число повторяется 3 раза, 
каждый раз увеличиваясь на само себя. Это базовая математика, 
которая и нужна для работы в 95% случае на фронтенде.
Да, задача сложнее, но она просто объединяет все то, что мы уже учили.
*/

function getMathResult(base, repeat) {
  if (typeof(repeat) != 'number' || repeat <= 0) {
    return num;
  }
  let str = '';

  for (let i = 1; i <= repeat; i++) {
    if (i === repeat) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }
}