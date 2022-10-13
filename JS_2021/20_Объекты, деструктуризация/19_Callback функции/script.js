
"use strict";
/*


*/
const options = {
  name: 'test',
  with: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};
console.log(options.name); //Ищем объект

// console.log(options['colors']['border']);

delete options.name; //Удаляем из объекта name

/*
Перебираем объект методом for in.
key- обозначаем свойство
*/

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]){
      console.log(`Свойство ${i} имеет значение ${options [key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

/*
Object.keys- метод берет объект и на его основании создает массив со всеми 
ключами объекта
*/
const options1 = {
  name: 'test',
  with: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  //Записываем функцию внутри объекты
  makeTest: function() {
    console.log('Test');
  }
};
console.log(Object.keys(options1).length); //показывает кол-во ключей в объекте
options1.makeTest(); //Вызывает функцию внутри объекта

//Деструктуризация, вытаскиваем ключи объекта в переменную
const {border, bg} = options1.colors; 
console.log(border);


