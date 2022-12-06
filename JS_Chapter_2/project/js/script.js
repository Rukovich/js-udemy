window.addEventListener('DOMContentLoaded', () => {

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
});