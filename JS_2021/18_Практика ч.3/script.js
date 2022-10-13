/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let number0Films;

function start() {
  number0Films = +prompt ('сколько фильмов вы уже посмотрели?', '');

  while(number0Films == '' || number0Films == null || isNaN(number0Films)) {
    number0Films = +prompt ('сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB ={
  count: number0Films,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt ('один из просмотренных фильмов', '');
    const b = prompt ('На сколько оцените его?', '');
  
    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error!');
      i--;
    }
  }
}
rememberMyFilms();


function detectPersonalLavel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log ('Произошла ошибка');
  }
}
detectPersonalLavel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
   personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`, '');
  }
}
writeYourGenres();
