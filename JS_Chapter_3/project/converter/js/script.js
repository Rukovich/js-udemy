'use strict';

const inputRub = document.querySelector('#rub');
const inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest(); //Делаем запрос на сервер

/*
  Метод open() - собирает настройки, которые помогут сделать запрос/
  open(method, url, async, login, password)
*/
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
/*
  Отправляем запрос с помощью метода send()
*/
  request.send();

/*
  Свойства XMLHttpRequest:
  status - статус запроса;
  statusText - текс статуса;
  response - ответ от сервера;
  readyState - содержит текущее состояние запроса;
*/

/* 
    События XMLHttpRequest:
    readystatechange - Отслеживает статус готовности в текущий момент;
    load - срабатывает когда запрос полностью загрузился
*/

  request.addEventListener('load', () => {
    if (request.status == 200) {
      const data = JSON.parse(request.response);
      inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUSD.value = 'Что-то пошло не так';
    }
  });
});