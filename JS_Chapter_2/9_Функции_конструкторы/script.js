/*

*/
'use strict';

//с помощью функции-конструктора User создаем новые объекты 
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan); //User {name: 'Ivan', id: 28, human: true}
console.log(alex); //User {name: 'Alex', id: 20, human: true}

//В функцию-конструктор можно записать метод
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello(); //Hello Ivan
alex.hello(); //Hello Alex


//Мы можем добавлять новые методы или свойства в наш конструктор. Далее они будут прототипно наследоваться от потомков, напримаер:
User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} ушел`)
}
ivan.exit(); //Пользователь Ivan ушел

//Данный функционал прописал с синтаксисом ES5, в более новых форматах появились классы