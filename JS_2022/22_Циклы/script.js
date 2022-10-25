/*
Тема
*/
"Use strict";
/*
Цикл do-while
*/
let num = 50;

while(num < 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++; 
}
while (num < 55);

/*
Цикл for
*/

for (let i = 1; i < 10; i++) {
  if (1 === 6) {
    break; // - останавливает цикл
    // continue; - позволяет пропустить ненужный шаг
  }
  console.log(i);
}