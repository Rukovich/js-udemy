
"use strict";
/*
Массивы и псевдомассивы.
for "За"
of "Из, от, для"
let "Давать, позволять"

.pop();- Удаляет последний элемент из массива
.push(10);- Добавляет элемент в конец массива
*/

const arr = [0, 1, 2, 3, 6, 8];

arr.pop(); //Удаляет последний элемент из массива
arr.push(10); //Добавляет элемент в конец массива

console.log(arr.length); //Показывает кол-во эл-в в массиве (последний индекс +1)

//Перебираем элементы в массиве и выводим в консоль
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Перебираем элементы в массиве и выводим в консоль с помощью метода for of
for (let value of arr) {
  console.log(value);
}

/*
Метод forEach- Метод перебора массива
*/
const arr1 = [0, 5, 2, 4, 6, 8];

arr1.forEach(function(item, i, arr1) {
console.log(`${i}: ${item} внутри массива ${arr1}`)
});

/*
.split(s)- Превращает строку в массив (s)-разделитель
.join (s)- Превращает массив в строку (s)-разделитель
.sort(fn)- Сортировка массива. Если не передать функцию сравнения- сортирует 
элементы как строки
*/
const str = prompt ("", "");
const products = str.split(", ");


console.log(products);
console.log(products.join(';'));


const arr2 = [0, 5, 2, 4, 7, 1];

//Метод .sort(fn)
arr2.sort(compareNum);
function compareNum (a, b) {
  return a - b;
}
console.log(arr2);
