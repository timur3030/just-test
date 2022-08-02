"use strict";



// пробел

function fib(n) {
  if (
    typeof n !== "number" ||
    n === "" ||
    n === null ||
    n <= 0 ||
    !Number.isInteger(n)
  )
    return alert("");

  let a = 0,
    b = 1,
    c,
    result = "";
  for (let i = 1; i <= n; i++) {
    
    result = result + ` ${a}`;
    c = a + b;
    a = b;
    b = c;
  }
  alert(result);
}

// пробел

// function fib(n) {
//   if (typeof n !== "number" || n === "" || n === null || n <= 0 || !Number.isInteger(n))
//     return alert("");
//   let a = 0, b = 1, c, result = "";
//   if (n == 1) return alert(0);
//   for (let i = 1; i <= n - 2; i++) {
//     c = a + b;
//     result += " " + c;
//     a = b;
//     b = c;
//   }
//   return alert(0 + " " + 1 + result);
// }

fib(4);

// пробел

// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
//  Если один из аргументов не является числом или их меньше 4 - возвращается 0.
//  Дробные числа разрешены.

// function findMaxNumber(a, b, c, d) {
//   if (typeof(a) !== 'number' ||typeof(b) !== 'number' ||typeof(c) !== 'number' ||typeof(d) !== 'number' ) {
//     return alert(0);
//   } else if (a > b && a > c && a > d) {
//     return alert(a);
//   } else if (b > a && b > c && b > d) {
//     return alert(b);
//   } else if (c > a && c > b && c > d) {
//     return alert(c);
//   } else {
//     return alert(d);
//   }
// }
// findMaxNumber(1, 5, "6", 10);

// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

// пробел

// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
//  (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
//  Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает
//  строку "Ошибка, проверьте данные"

// function getTimeFromMinutes(minutes) {
//   let hour = Math.floor(minutes / 60);
//   let minute = minutes - (hour * 60);
//   if (isNaN(minutes) || Number.isInteger(minutes) || minutes < 0) {
//     return alert("Ошибка, проверьте данные");
//   } else if (minutes < 60 || minutes >= 300) {
//     return alert(`Это ${hour} часов и ${minute} минут`);
//   } else if (minutes < 120) {
//     return alert(`Это ${hour} час и ${minute} минут`);
//   } else if (minutes < 300) {
//     return alert(`Это ${hour} часа и ${minute} минут`);
//   }
// }

// getTimeFromMinutes(prompt("Введите число минут", ""));

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// пробел

// function getCoupeNumber(seatNumber) {
//   if (
//     seatNumber < 0 ||
//     seatNumber % 1 !== 0 ||
//     seatNumber == "" ||
//     seatNumber === null ||
//     isNaN(seatNumber)
//   ) {
//     return alert("Ошибка. Проверьте правильность введенного номера места");
//   } else if (seatNumber == 0 || seatNumber > 36) {
//     return alert("Таких мест в вагоне не существует");
//   } else {
//     return alert(Math.ceil(seatNumber / 4));
//   }
// }

// getCoupeNumber(prompt("Введите номер места", "Используйте числа от 1 до 36"));

// function calculateVolumeAndArea(rebro) {
//   if (rebro < 1 || rebro % 1 != 0 || isNaN(rebro))
//     return alert("При вычислении произошла ошибка");
//   let volume = rebro * rebro * rebro;
//   let area = rebro * rebro * 6;
//   alert(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
// }

// calculateVolumeAndArea(prompt("Введите длину ребра куба", ""));

// пробел

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

//   while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколко оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Вы посмотрели довольно мало фильмов");
//   } else if (personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }

// detectPersonalLevel();

// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   }
// }

// // showMyDB();

// /* Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать
//  на вопрос "Ваш любимый жанр под номером ${номер по порядку}".
//  Каждый ответ записывается в массив данных genres */

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//   let question = prompt(`Ваш любимый жанр под номером ${i}`, "")
//   personalMovieDB.genres[i-1] = question;
//   }
// }

// console.log(writeYourGenres());

// console.log(personalMovieDB);

// пробел

// function getMathResult(baza, count) {
//   if (typeof count != "number" || count <= 1) return baza;

//   let result = "";
//   for (let i = 2; i <= count; i++) {
//     result += "---" + (baza * i);
//   }
//     return (baza + result);
// }

// alert(getMathResult(3, 10));
