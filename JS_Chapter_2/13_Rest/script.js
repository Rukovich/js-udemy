'use strict';

//rest-оператор собирает все оставшиеся значения и формирует из них массив
const log = function(a, b, ...rest) {
  console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); //basic rest [ 'operator', 'usage' ]

//Параметры по умолчанию
//Например зададим параметр по умолчаниию basis
function calcOrDouble(number, basis = 2) { 
  console.log(number * basis);
}

calcOrDouble(3); //6


//Применим на практике в нашем проекте