//Задание No1. Переменные
let admin, name;

name = "Vika";

admin = name;

alert(admin);

//Задание No2. Константы
const BIRTHDAY = "18.04.1982"; // Да, так как значение четко задано.
const AGE = someCode(BIRTHDAY); // Нет, значение будет известно в ходе выполнения скрипта.
//Задание No3. Строки

let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

//Задание No4. Преобразования типов
"" + 1 + 0; // 10
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // '9px'
"$" + 4 + 5; // '$45'
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // Infinity
"  -9  " + 5; // ' -9 5 '
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // Nan

//Задание No5. Постфиксная и префиксная формы
let a = 1,
  b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(a, b, c, d);
a = 2;
b = 2;
c = 2;
d = 1;

//Задание No6. Результат присваивания
let a = 2;
let x = 1 + (a *= 2);

a = 4;
x = 5;

//Задание No7. Операторы сравнения
5 > 4; // true
"ананас" > "яблоко"; // false
"2" > "12"; // true
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

//Задание No8. Операторы взаимодействия

let name = prompt("Ваше имя?", "");
alert(name);

//Задание No9. Условные операторы
if ("0") {
  alert("Привет"); // Выведется
}

//Задание No10. Условные операторы
let value = prompt("Каково «официальное» название JavaScript?");
if (value === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

//Задание No11. Покажите знак числа
let value = prompt("введите число", 0);

if (value > 0) {
  alert("1");
} else if (value < 0) {
  alert("-1");
} else {
  alert("0");
}

//Задание No12. Перепишите 'if' в '?'
let result;
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}

result = a + b < 4 ? "Мало" : "Много";

//Задание No13. Перепишите 'if..else' в '?'
let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

//Задание No14. ИЛИ
alert(null || 2 || undefined); // 2

//Задание No15. ИЛИ

alert(alert(1) || 2 || alert(3)); // 1, 2

//Задание No16. И
alert(1 && null && 2); // null

//Задание No17. И
alert(alert(1) && alert(2)); // 1, undefined
//Задание No18.
alert(null || (2 && 3) || 4); // 3

//Задание No19. Проверка значения из диапазона
if (age >= 14 && age <= 90);

//Задание No20. Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

//Задание No21. If
if (-1 || 0) alert("first"); // Выполнится undefined
if (-1 && 0) alert("second"); // Не выполнится
if (null || (-1 && 1)) alert("third"); // Выполнится undefined

//Задание No22. Проверка логина
let = userName = prompt("Кто там?", "");
let = password;
if (userName == "Админ") {
  password = prompt("Пароль?", "");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  } else if (password == "" || password == null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName == "" || userName == null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

//Задание No23. Напишите "if", аналогичный "switch"
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;
  default:
    alert("We hope that this page looks ok!");
}

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

//Задание No24. Переписать условия "if" на "switch"
let a = +prompt("a?", "");
if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}
if (a == 2 || a == 3) {
  alert("2,3");
}

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}

//Задание No25.
let a = +prompt("Введите число");
if (a > 0) {
  a++;
}
alert(a);

//Задание No26.
let a = +prompt("Введите число");
if (a > 0) {
  a++;
} else {
  a -= 2;
}
alert(a);

//Задание No27.
let a = +prompt("Введите число");
if (a > 0) {
  a++;
} else if (a == 0) {
  a = 10;
} else {
  a -= 2;
}
alert(a);

//Задание No28.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");
let counter = 0;
if (a > 0) {
  counter++;
}
if (b > 0) {
  counter++;
}
if (c > 0) {
  counter++;
}
alert(counter);

//Задание No29.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");
let counterPlus = 0;
let counterMinus = 0;
if (a > 0) {
  counterPlus++;
}
if (b > 0) {
  counterPlus++;
}
if (c > 0) {
  counterPlus++;
}
if (a < 0) {
  counterMinus++;
}
if (b < 0) {
  counterMinus++;
}
if (c < 0) {
  counterMinus++;
}
alert(`Отрицательных чисел: ${counterMinus}`);
alert(`Положительных чисел: ${counterPlus}`);

//Задание No30.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
if (a > b) {
  alert(a);
} else {
  alert(b);
}

//Задание No31.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
if (a > b) {
  alert(1);
} else {
  alert(2);
}

//Задание No32.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
if (a > b) {
  alert(a);
  alert(b);
} else {
  alert(b);
  alert(a);
}

//Задание No33.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c;
debugger;
if (a > b) {
  c = a;
  a = b;
  b = c;
}
alert(`Это переменная B: ${b}`);
alert(`Это переменная A: ${a}`);

//Задание No34.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
if (a != b) {
  alert(`Это переменная B: ${b + a}`);
  alert(`Это переменная A: ${a + b}`);
} else {
  alert(`Это переменная B: ${(b = 0)}`);
  alert(`Это переменная A: ${(a = 0)}`);
}

//Задание No35.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
if (a != b) {
  if (a > b) {
    b = a;
    alert(`Это переменная B: ${b}`);
    alert(`Это переменная A: ${a}`);
  } else {
    a = b;
    alert(`Это переменная B: ${b}`);
    alert(`Это переменная A: ${a}`);
  }
} else {
  a = 0;
  b = 0;
  alert(`Это переменная B: ${b}`);
  alert(`Это переменная A: ${a}`);
}

//Задание No36.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число с");
if (a < b && a < c) {
  alert(a);
} else if (b < a && b < c) {
  alert(b);
} else if (c < a && c < b) {
  alert(c);
} else {
  alert("Условия не соблюдены");
}

//Задание No37.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число с");
if ((a < b && a > c) || (a < c && a > b)) {
  alert(a);
} else if ((b < a && b > c) || (b < c && b > a)) {
  alert(b);
} else if ((c < a && c > b) || (c < b && c > a)) {
  alert(c);
} else {
  alert("Условия не соблюдены");
}

//Задание No38.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число с");
alert(Math.min(a, b, c));
alert(Math.max(a, b, c));
//раньше не знала за эту функцию :)

//Задание No39.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число с");
let sum = 0;
if (a > b && a > c) {
  sum += a;
} else if (b > a && b > c) {
  sum += b;
} else if (c > a && c > b) {
  sum += c;
} else {
  alert("Условия не соблюдены");
}
if ((a < b && a > c) || (a < c && a > b)) {
  sum += a;
} else if ((b < a && b > c) || (b < c && b > a)) {
  sum += b;
} else if ((c < a && c > b) || (c < b && c > a)) {
  sum += c;
} else {
  alert("Условия не соблюдены");
}
alert(sum);

//Задание No40.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число с");
if (a === b) {
  alert("Третье");
} else if (a === c) {
  alert("Второе");
} else {
  alert("Первое");
}
