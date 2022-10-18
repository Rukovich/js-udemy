"use strict";

/*
Классификация типов данных
*/
/*
Типы данных на примере кода:
*/
const number = 5;

console.log(-4 / 0); //Infinity
console.log('string' * 9); //NaN
console.log(number == 5); //true (boolen)

let und;
console.log(und); //undefined

/*
Рассмотрим объекты и как к ним обращаться
*/ 
const obj = {
  name: 'John',
  age: 25,
  isMarried: false
};
console.log(obj.name); //можем обращаться через "."
console.log(obj['name']); //либо через "[]"
/*
Так же в объект можно добавить значение, с помощью "." или [].
*/ 
obj.weight = '60';
obj['height'] = 160;

console.log(obj.weight); //60
console.log(obj.height); //160

/*
Внутри объектов возможно создавать вложенные структуры, например:
*/ 
const object = {
  name: 'John',
  age: 25,
  isMarried: false,
  children: {
    name: 'Alex',
      friend: {
        name: 'Jack'
      }
  }
};
/*
Рассмотрим массивы и как к ним обращаться
*/
let arr = ['plump.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]); //orange.jpg
