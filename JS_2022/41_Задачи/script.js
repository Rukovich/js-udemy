/*
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
(тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, 
что этот оператор из более нового стандарта, чем тут доступен.

Пример: calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

function calculateVolumeAndArea() {

}
*/

function calculateVolumeAndArea(a,b) {

    let s = (a * b) * 6;
    let v = a * b;
    const result = `Объем куба: ${v}, площадь всей поверхности: ${s}`

    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return `При вычислении произошла ошибка`;
    } else {
        return result
    }
}
calculateVolumeAndArea(6, 6);