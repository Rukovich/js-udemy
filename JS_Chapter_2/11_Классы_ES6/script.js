'use strict';

//Объявление классов
// Классы имеют следующий синтаксис, например:

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

//Создаем метод внутри класса
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

//Теперь используем класс:
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()) //100
console.log(long.calcArea()) //2000

//Наследование
//Например пропишем дополнительный класс, в котором будем создавать цветные прямоугольники. Данный класс будет наследовать все свойства предыдущего Rectangle
//Для этого используем ключевое слово extends (наследуется от...)
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); //вызывает значения родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps(); //Текст: Hello world, цвет: red
console.log(div.calcArea()) //250
