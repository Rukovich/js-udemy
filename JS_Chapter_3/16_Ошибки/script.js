"use strict";

const data = [
  {
      id: 'box',
      tag: 'div'
},
  {
      id: '',
      tag: 'nav'
  }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
      
        //Создаем свою ошибку
        if (!blockObj.id) throw new Error('В данных под номером ${i + 1} нет id')
      
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
      })
} catch(e) {

    if (e.name === 'syntaxError') { //добавляем условие
        console.log(e.message);
    //В ином случае выбрасываем ошибку и останавливаем код
    } else throw e; 
}

// const err = new SyntaxError('bvhbuevhf');
// console.log(err.name, err.message, err.stack);
