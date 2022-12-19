'use strict';
/*
Формат JSON
формат для передачи и получения данных с сервера

JSON.stringify() - преобразует значение JavaScript в строку JSON
JSON.parse() - разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.
*/

// const persone = {
//   name: 'Alex',
//   tel: '+78888888888'
// };

// console.log(JSON.stringify(persone)); //{"name":"Alex","tel":"+78888888888"}
// console.log(JSON.parse(JSON.stringify(persone))); //{ name: 'Alex', tel: '+78888888888' }

//Глубокое клонирование объектов

const persone = {
  name: 'Alex',
  tel: '+78888888888',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

//Превращаем объект в формат JSON, Далее распарсим объект обратно в js
const clone = JSON.parse(JSON.stringify(persone)); //Создаем глубокую копию объекта
clone.parents.mom = 'Ann'; //Меняем значение в объекте
console.log(persone);
console.log(clone);