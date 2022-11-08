/*

*/

/*

*/

const solider = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

john.__proto__ = solider; //Устаревший способ 
console.log(john.armor);

Object.setPrototypeOf(john, solider); //Использующийся способ. придали объекту прототип

//Создаем объект john, который прототипо наследуется от solider
const john = object.create(solider)