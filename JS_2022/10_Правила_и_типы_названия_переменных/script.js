"use strict";

// Как не стоит называть переменные:
const a = 5000;
const b = 4000;
console.log('Ширина кузова автомобиля:' + a + ', длина' + b);

// Как стоит:
const vehicleBodyWidth = 5000;
const vehicleBodylenght = 4000;
console.log('Ширина кузова автомобиля:' + vehicleBodyWidth + ', длина' + vehicleBodylenght);

/*
Какие бывают стили написания:
1. snake_case;
2. UPPER_SNAKE_CASE- обычно так обозначают константы (COLOR_RED = '#F00';);
3. _apiKey- такое тоже лучше не трогать;
4. kebab-case- слова через "-";
5. PascalCase- Первая буква большая;
*/
