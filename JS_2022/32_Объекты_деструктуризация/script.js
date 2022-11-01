/*
Тема
*/

// const options = {
//   name: 'test',
//   with: 1024,
//   height: 1024,
//   colors: {
//     borders: 'black',
//     bg: 'red'
//   }
// };

// console.log(options.name);

//С помощью delete мы можем удалить свойство из объекта 
// delete options.name;

//Чтобы перебрать все своства объекта можем воспользоваться такой конструкцией for in:
//В цикле ниже мы перебираем каждое значение в объекте

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// Свойство name имеет значение test
// Свойство with имеет значение 1024
// Свойство height имеет значение 1024
// Свойство colors имеет значение [object Object]

//но до объекта в объекте нам не дотянуться

// const options = {
//   name: 'test',
//   with: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };

// console.log(options['colors']['border']); //black

/*
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
*/

// В консоль выводится:
// Свойство name имеет значение test
// Свойство with имеет значение 1024
// Свойство height имеет значение 1024
// Свойство border имеет значение black
// Свойство bg имеет значение red

//Релизуем счетчик свойств объекта
/*
const options = {
  name: 'test',
  with: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++; //счетчик
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++; //счетчик
  }
}
console.log(counter); //Получаем 5 свойств всего в объекте
*/

//Можно это сделать проще, с помощью Object.keys()
// console.log(Object.keys(options)); //[ 'name', 'with', 'height', 'colors' ]
// console.log(Object.keys(options).length); // 4

//Мы можем создавать подобные методы самостоятельно с помощью функций

const options = {
  name: 'test',
  with: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('Test');
  }
};
options.makeTest(); //Test



//Деструктуризация объектов
//С помощью кода ниже мы отделяем свойства ниже из объекта и прописываем их в константу

const {border, bg} = options.colors;
console.log(border); //black