/*
Тема
*/

const arr = [1, 2, 3, 6, 8];

//Удаляет последний элемент
/*
arr.pop();
console.log(arr); // [ 1, 2, 3, 6 ]
*/

//Добавляет элемент в конец массива
/*
arr.push(10);
console.log(arr); // [ 1, 2, 3, 6, 8, 10 ]
*/

//Перебирает массив
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//Второй способ перебора
for (let value of arr) {
console.log(value);
}