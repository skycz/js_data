"use strict";

const now = new Date('2024 - 11 - 23'); // Создаём объект `Date`, представляющий текущую дату и время

/* new Date.parse('2024 - 11 - 23'); */  // возвращает метку времени(миллисекунды с 01.01.1970 UTC)

/* console.log(now.setHours(18)); */ // Устанавливает часы объекта `now` на 18
console.log(now);



/* console.log(now.getFullYear()); // Возвращает текущий год (например, 2024)
console.log(now.getMonth()); // Возвращает номер текущего месяца (0 - январь, 11 - декабрь)
console.log(now.getDate()); // Возвращает текущий день месяца (1-31)
console.log(now.getDay()); // Возвращает номер текущего дня недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
console.log(now.getHours()); // Возвращает текущий час (0-23, в 24-часовом формате)
console.log(now.getUTCHours()); // Возвращает текущий час по времени UTC (0-23, в 24-часовом формате)
console.log(now.getTimezoneOffset()); // Возвращает разницу между местным временем и UTC в минутах (например, -180 для GMT+3)
console.log(now.getTime()); // Возвращает количество миллисекунд, прошедших с 1 января 1970 года (00:00:00 UTC) до текущего времени
console.log(now.getMinutes()); // Возвращает текущую минуту (0-59)
console.log(now.getSeconds()); // Возвращает текущую секунду (0-59)
console.log(now.getMilliseconds()); // Возвращает текущие миллисекунды (0-999) */

let start = new Date(); // Создаём объект `Date` для фиксации времени начала выполнения цикла

for (let i = 0; i < 100000; i++) { // Запускаем цикл, который выполняется 100,000 раз
    let some = i ** 3; // Возводим `i` в куб (i^3) и сохраняем результат в переменную `some`
}

let end = new Date(); // Создаём объект `Date` для фиксации времени окончания выполнения цикла

alert(`Цикл отработал за ${end - start} миллисекунд`);
// Выводим разницу между `end` и `start` (в миллисекундах), показывая время выполнения цикла

