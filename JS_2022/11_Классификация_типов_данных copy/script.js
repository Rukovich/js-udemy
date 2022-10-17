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
Рассмотрим массивы и как к ним обращаться
*/
let arr = ['plump.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[1]); //orange.jpg
