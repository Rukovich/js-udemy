/*
Тема
*/

// Изменяя объекты, мы взаимодействием со ссылкой, по этому при изменении каких-либо значений
// объекты, мы меняем значения у исходного объекта 

// Создать поверхностную копию объекта можно таким способом:

/*
//Создаем функцию:
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

// копируем объект:
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers); //Копируем объект с помощью функции 
newNumbers.a = 10;

console.log(newNumbers); //{ a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); //{ a: 2, b: 5, c: { x: 7, y: 4 } }

// Поверхностная она потому, что не копирует вложенные конструкции, по этому если обратиться к 'c' 
// мы поменяем значение в исходном объекте.
newNumbers.c.x = 10;
console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 } }
//Как сделать глубокую копию объекта, разберем позже
*/



// Еще один способ поверхностного клонировния объекта метод Object.assign()
// Метод Object.assign() используется для копирования значений всех собственных 
// перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования
// он возвращает целевой объект.


// const add = {
//   d:17,
//   e:20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add); //{ d: 17, e: 20 }
// console.log(clone); //{ d: 20, e: 20 }

// Создаем поверхностную копию в массивах с помощью метода slice ()
/*
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasa';
console.log(newArray); //[ 'a', 'asasa', 'c' ]
console.log(oldArray); //[ 'a', 'b', 'c' ]
*/


//Spread оператор
//Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах

//Например в коде ниже с помощью spread оператора '...' мы склеиваем 3 массива
/*
const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet); //['youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','facebook']
*/

//Создаем поверхностную копию массива с помощью spread оператора (ES9)
// const array = ['a', 'b'];
// const newArray = [...array];
// console.log(newArray); //[ 'a', 'b' ]

//Создаем поверхностную копию объекта с помощью spread оператора (ES9)
// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};


