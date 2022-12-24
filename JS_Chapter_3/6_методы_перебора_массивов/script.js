'use strict';

//filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => name.length < 5);
console.log(shortNames); //[ 'Ivan', 'Ann' ]


//map - позволяет взять исходный массив и изменить каждый элемент внутри него
const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLocaleLowerCase());
console.log(result); //[ 'ivan', 'anna', 'hello' ]


//some и every - возвращают булиновое значение
//some - если один из элементов соответсвует
//every - если все элементы соответсвуют
const some = [4, 'qwwq', 'asasad'];

console.log(some.some(item => typeof(item) === 'number')); //true
console.log(some.every(item => typeof(item) === 'number')); //false


//reduce
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
console.log(res); //21

const arr = ['apple', 'pear', 'plum'];
const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res); //apple, pear, plum

//
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //превращаем объект в массив
.filter(item => item[1] === 'persone') //используем метод filter
.map(item => item[0])

console.log(newArr); //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]