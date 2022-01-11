//Задание No1. Проверка на пустоту
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//Задание No2. Умножаем все числовые свойства на 2
let obj = {
  size: 2,
  number: 5,
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

//Задание No3. Ввод числового значения
function readNumber() {
  let number = prompt("Введите число");
  while (!isFinite(number) || number === "") {
    number = prompt("Введите число");
  }
  return +number;
}

//Задание No4. Случайное число от min до max
function randomInteger(min, max) {
  let random = min + Math.random() * (max - min);
  return random;
}

//Задание No5. Случайное целое число от min до max
function randomInteger(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

//Задание No6. Сделать первый символ заглавным
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

//Задание No7. Проверка на спам
function checkSpam(str) {
  let lowString = str.toLowerCase();
  return lowString.includes("viagra") || lowString.includes("xxx");
}

//Задание No8. Усечение строки
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "...";
  } else {
    return str;
  }
}

//Задание No9. Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1);
}

//Задание No10. Сумма введённых чисел

function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert(sumInput());

//Задание No12. Обязателен ли "else"?
function checkAge(age) {
  // обе функции сработают одиаково
  if (age > 18) {
    return true;
  }
  return confirm("Родители разрешили?");
}

//Задание No13. Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

//Задание No14. Функция min(a, b)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//Задание No15. Функция pow(x,n)
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1) {
  alert(`Используйте натуральное число, степень ${n} не поддерживается!`);
} else {
  alert(pow(x, n));
}

//Задание No16. Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

//Задание No17. Робинзон Крузо
let income = 3333;
let consumption = 1750;
let cost = 8000;
let result = Math.ceil(cost / (income - consumption));
console.log(`За ${result} мес.`);

// Задание No18. Вопросы пользователю
let sum = 0;
for (let index = 0; index < 10; index++) {
  let value = +prompt("Введите число");
  if (Math.sign(value) === -1) {
    sum += value;
  }
}
console.log(sum);

// Задание No19. Скопирован ли массив?
//Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert(fruits.length); // 4, так как shoppingCart и fruits это один и тот же массив

//Задание No20. Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

//Задание No21. Вызов в контексте массива
//Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function () {
  alert(this);
});
arr[2](); // a, b и function.
