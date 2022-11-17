/*
Навигация по DOM
*/

//childNodes - Узлы которые являются детьми у body
console.log(document.body.childNodes); //Nodelist(4) [text, div.wrapper, text, script]

//firstChild и lastChild
//первый и последнего ребенка внутри родителя
console.log(document.body.firstChild);
console.log(document.body.lastChild)

//firstElement и lastElement
//первый и последний элемент внутри родителя
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild)

//Обращаемся к элементу через ID
console.log(document.querySelector('#current'));

//Обращаемся к соседнему элементу
console.log(document.querySelector('#current').parentNode);
 

/*
data - аттрибуты 
*/
 //Получаем data - аттрибуты со страницы
console.log(document.querySelector('[data-current="3"]'));

//получаем следующий за ним элемент с помощью свойства nextElementSibling
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//получаем предыдущий элемент с помощью свойства previosSibling
console.log(document.querySelector('[data-current="3"]').previosElementSibling);


/*
Перебираем for of
*/
//for of перебирает всех детей внутри body и оставляет только элементы
// for (let node of document.body.childNodes) {
//     if (node.nodeName == 'text') {
//         continue;
//     }

//     console.log(node);
// }