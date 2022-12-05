//показываем текущую дату и время из системы
/*
const now = new Date();
console.log(now); //2022-12-05T18:35:49.229Z
*/
//Метдоды для работы с датами

//1 группа- получение компонентов с датами (Геттеры)

/*
const now = new Date();
console.log(now.getFullYear()); //2022
console.log(now.getMonth()); //11
console.log(now.getDate()); //5
console.log(now.getDay()); //1
//Учитываем UTC
console.log(now.getUTCHours()); //18
*/

//Получает разницу между часовым поясом и UTC
/*
const now = new Date();
console.log(now.getTimezoneOffset()); //-180
*/

//Получаем колличество милисекунд прошедших с 1 января 1970 года
/*
const now = new Date();
console.log(now.getTime()); //1670266060422
*/

//2 группа- Установка и получение дат (Сеттеры)
//По сути get меняем на set

const now = new Date();
console.log(now.setHours(18)); //1670255482646
console.log(now); //2022-12-05T15:51:22.646Z

//Как пример засечем время выполнения скрипта

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();
console.log(`Цикл отработал за ${end - start} мс`); //Цикл отработал за 23 мс