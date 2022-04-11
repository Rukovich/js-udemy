
"use strict";
/*
Передача по ссылку или по значению, Spread оператор.
*/

const obj = {
  a: 5,
  b: 1
};

const copy = obj; //ссылка
copy.a = 10;
console.log(copy);

//Функция при помощи цикла сощдает новый объект перебирая существующий
function copy1(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy1(numbers);

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

// Соединяем объект add с объектом numbers
//свойство .assign копирует значение всех собсвенных перечисляемых свойств
const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

/*
Копируем массивы
.slice- Метод позволяет скопировать старый массив
*/
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdscsdce';
console.log(newArray);
console.log(oldArray);

/*
ES6 Использование оператора разворота.
*/

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'levejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'faceebook'];
      
console.log(internet);

//
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

//
const array = ['a', 'b'];
const newArray1 = [...array];
console.log(newArray1);

//
const q = {
  one: 1,
  two: 2
};

const newObj = {...q};