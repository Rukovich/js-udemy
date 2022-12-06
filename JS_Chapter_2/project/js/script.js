window.addEventListener('DOMContentLoaded', () => {
  //Tabs
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParrent = document.querySelector('.tabheader__items');

  // const tabActive = document.querySelector('.tabheader__item_active');

  function hideTabContent() { //Функция убирает табы
    tabsContent.forEach(item => {
      item.classList.add('hide'); 
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) { //номер аргумента по порядку (0 по умолчанию)
    tabsContent[i].classList.add('show', 'fade'); //показываем блок
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active'); //Добавляем класс активности нужному табу
  }

  hideTabContent(); //вызываем функцию скрытия табов
  showTabContent(); //вызываем функцию показа табов

  tabsParrent.addEventListener('click', (event) => {
    const target = event.target; //задаем event.target в переменную

    if (target && target.classList.contains('tabheader__item')) { //Проверяем точно ли мы попали в таб
      tabs.forEach((item, i) => { //элемент который нужно перебрать и номер по порядку
        if (target == item) { //Проверяем чтобы был один и тот же элемент
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Timer
  const deadline = '2022-12-30';

  function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const days = Math.floor( (t/(1000*60*60*24)) );
      const seconds = Math.floor( (t/1000) % 60 );
      const minutes = Math.floor( (t/1000/60) % 60 );
      const hours = Math.floor( (t/(1000*60*60) % 24) );

      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
  }

  function getZero(num){
      if (num >= 0 && num < 10) { 
          return '0' + num;
      } else {
          return num;
      }
  }

  function setClock(selector, endtime) {

      const timer = document.querySelector(selector);
         const days = timer.querySelector("#days");
         const hours = timer.querySelector('#hours');
         const minutes = timer.querySelector('#minutes');
         const seconds = timer.querySelector('#seconds');
         const timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
          const t = getTimeRemaining(endtime);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
              clearInterval(timeInterval);
          }
      }
  }

  setClock('.timer', deadline);

  
});