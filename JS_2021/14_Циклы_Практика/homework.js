
/* 
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/

// Код возьмите из предыдущего домашнего задания
'use strict';


const number0Films = +prompt ('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={
  count: number0Films,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log ('Произошла ошибка');
}

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


console.log(personalMovieDB);