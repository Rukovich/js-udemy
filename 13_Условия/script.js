
"use strict";

if (4 == 9) {
  console.log('ок!');
} else {
console.log ('error!');
}

//синтаксис 1
const num = 50;
if (num < 49) {
  console.log('error!');
} else if (num > 100) {
  console.log('Слишком много');
} else {
  console.log('OK!');
}

//Синтаксис 2- тернарный оператор
(num === 50) ? console.log('OK!') : console.log('Error!');

//Синтаксис switch 
const num1 = 50;

switch (num1) {
  case 49: 
    console.log('неверно');
    break;
  case 100:
    console.log('неверно');
    break;
  case 50:
    console.log('верно');
    break;
  default:
      console.log('не в этот раз');
    break;
}