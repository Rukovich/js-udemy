'use strict';
/*

*/
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum(); 

// 1. Обычная функция: this = window, Но если 'use strict' - undefined.
// 2. Контекст у методов объекта- сам объект.

// 3. this в конструкторах и классах- это новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello' + this.name);
    };
}
let ivan = new User('Ivan', 23);

//Ручная привязка this с помощью методов: call, apply, bind
//с помощью методов user и apply можно вручную присвоить контекст this функции
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); //{name: 'John'} JohnSmith
sayName.apply(user, ['Smith']); //{name: 'John'} JohnSmith

//То же самое можно сделать с помощщью метода bind. Он создает новую функцию связанную с определенным контекстом.
function count(num) {
    return this * num;
}
const double = count.bind(2);
console.log(double(3)); //6
console.log(double(13)); //26


//Примеры

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red' //При клике покрасти кнопку в красный
});

//Контекст вызова при использовании стрелочной функции
// В данном случае, так как используется стрелочная функция this обращается к родителю. Если мы переделаем функцию в обычную - будет ошибка
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        } 

        say();
    }
};
obj.sayNumber(); //5

//Еще пример:
