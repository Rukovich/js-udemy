
"use strict";

/*
function declaration- существует еще до того, как код запустится;
function expression- создается только тогда, когда доходит поток кода, можно вызвать
  только после объявления;
Стрелочные функции- Не имеет своего контекста (this). ()=>;
*/

let num = 20;

function showFirstMessage(text) {
  console.log (text);
  num = 10;
}

showFirstMessage('Hello world!');
console.log (num);

function calc (a, b) {
  return (a + b);
}

console.log (calc(4, 6));
console.log (calc(5, 8));

// function declaration
function ret () {
  let num = 50;
  //
  return num;
}

const anotherNum = ret();
console.log(anotherNum);


//function expression
const logger = function() {
  console.log('hello');
};
logger();

//Стрелочные функции 
const calc1 = (a, b) => {
   console.log ('1');
   return a + b;
};