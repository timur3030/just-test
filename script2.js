"use strict";

let obj = {
  name: "Maga",
  age: 35,
};

let clone = {};

for(let key in obj) {
    
}

console.log(obj);
console.log(clone);

// пробел

// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {
//   name: "John",
//   age: 25,
// };

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// пробел

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить
// это число в прогрессии. (Смотри пример ниже). Функция должна возвращать
// строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку,
// разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать
// просто первый аргумент. (Проверяем через оператор typeof)

// function getMathResult(baza, count) {
//   if (typeof count != "number" || count < 1) return baza;

//   let result = 0;
//   let x2;
//   let itog;
//   for (let i = 1; i <= count; i++) {
//     x2 = baza * i;
//     // for (let j = 1; j == i; j++) {}
//     for (let k = 2; k <= i; k++) {
//       if (k == i) {
//         result = result + `---${x2}`;
//       }
//     }
//     itog = baza + result;
//   }

//   return itog;
// }

// alert(getMathResult(5, 3));

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
// проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию,
// она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3,
// то число повторяется 3 раза, каждый раз увеличиваясь на само себя.
// Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
