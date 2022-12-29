"use strict";

//localStorage.setItem() - записывает в глобальный объект ключ / значение
localStorage.setItem("number", 5);

//localStorage.getItem() - Получает данные из localStorage
localStorage.getItem("number"); //5

//localStorage.removeItem() - Удяляет значение
localStorage.removeItem("number"); //null

//localStorage.clear() - Очищает хранилище
localStorage.clear();
