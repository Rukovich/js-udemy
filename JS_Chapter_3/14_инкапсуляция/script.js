'use strict';

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
//     }
// }

// const ivan = new User('Ivan', 27);
// //Получаем доступ к свойствам
// console.log(ivan.name);
// console.log(ivan.age);

// //Напрямую изменяем свйства
// ivan.age = 30;
// ivan.name = 'Alex';
// ivan.say()


// //Для того, чтобы нельзя было напрямую менять свойтсва и нужна инкапсуляция
// function User(name, age) {
//     this.name = name;
//     let userAge = age; //создаем переменную, к которой не будет доступа вне функции

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.userAge);

// //Напрямую изменяем свйства
// ivan.age = 30;
// ivan.name = 'Alex';
// ivan.say()

//Пример инкапсуляциии
function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
    }

    //Создаем геттеры и сеттеры
    this.getAge = function() {
        return userAge
    }
    this.setAge = function() {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!')
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.getAge()); //Получаем возраст

ivan.setAge(30); //Устанавливаем возраст
console.log(ivan.getAge());
ivan.say()


//Пример инкапсуляциии на классах
'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя ${this.name}, возраст ${this._age}`);
    }

    //Создаем геттеры и сеттеры
    get age() {
        return this._age;
    }
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!')
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();
