
"use strict";


//Синтаксис 1
let num = 50;
while (num <= 55) {
  console.log(num);
  num++;
}

//Синтаксис 2
let num1 = 50;
do {
  console.log(num1);
  num1++;
}
while (num1 <= 55);

//Синтаксис 3
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
    // continue;
  }
  console.log(i);
}

// Оператор continue позволяет исключить отдельное условие не прерывая цикл
