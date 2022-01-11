//Задание No1. Переведите текст вида border-left-width в borderLeftWidth
function camalize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

//Задание No2. Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}
let arr = [9, 4, 8, 5, 3];
let filtered = filterRange(arr, 4, 8);
console.log(filtered);
console.log(arr);

//Задание No3 Фильтрация по диапазону «на месте»
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [9, 4, 8, 5, 3];
filterRange(arr, 4, 8);
console.log(arr);

//Задание No4. Сортировать в порядке по убыванию
let arr = [3, 2, 5, 6, 4];
arr.sort((a, b) => b - a);
console.log(arr);

//Задание No5. Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);

//Задание No6. Создать расширяемый калькулятор
function calculator() {
  let num1 = prompt("Введите первое число примера: ", "2");
  let mathAction = prompt("Введите математическое действие: ", "*, /, +, -");
  let num2 = prompt("Введите второе число примера: ", "2");
  let result;
  switch (mathAction) {
    case "+":
      result = num1 + num2;
      console.log(result);
      break;
    case "-":
      result = num1 - num2;
      console.log(result);
      break;
    case "*":
      result = num1 * num2;
      console.log(result);
      break;
    case "/":
      result = num1 / num2;
      console.log(result);
      break;
  }
}

//Задание No7. Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map((item) => item.name);
console.log(names);

//Задание No8. Отсортировать пользователей по возрасту
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [vasya, petya, masha];
sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

//Задание No9. Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];
console.log(getAverageAge(arr));

//Задание No10. Оставить уникальные элементы массива -------- Задание No11. Фильтрация уникальных элементов массива
function unique(arr) {
  return Array.from(new Set(arr));
}
let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
console.log(unique(strings)); // Я так поняла 10 нужно было делать как-то по другому? Потому что я потом перешла к 11, а там тоже самое.

//Задание No12. Перебираемые ключи
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys);
//map.keys() не возвращает массив. Что бды код сработал правильно , нужно конвертировать его.

//Задание No13. Независимы ли счётчики?
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter(); // counter и counter2 вызваны по отдельности, потому они не влияют друг на друга и имеют собственный count
alert(counter()); // 0
alert(counter()); // 1
alert(counter2()); // 0
alert(counter2()); // 1

//Задание No14. Объект счётчика
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter(); //Будет работать! Обе функции имеют доступ к одной и той же переменной count

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

//Задание No15*. Вычислить факториал
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));
