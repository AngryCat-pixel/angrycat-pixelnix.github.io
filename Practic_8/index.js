//Задание No1. Последнее значение цикла
let i = 3;
while (i) {
  alert(i--); //последнее значение будет 1, так как после, i уменьшится до 0 и цикл перестанет выполняться
}

//Задание No2.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Вы не ввели число");
} else {
  if (a < b && b < c) {
    //удвоить число
    a *= 2;
    b *= 2;
    c *= 2;
  } else {
    //заменить на противоположное
    a = a - a * 2;
    b = b - b * 2;
    c = c - c * 2;
  }
  //вывести все переменные
  alert(a);
  alert(b);
  alert(c);
}

//Задание No3.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");
let arr = [a, b, c];
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Вы не ввели число");
} else {
  if ((a < b && b < c) || (a > b && b > c)) {
    //удвоить число
    a *= 2;
    b *= 2;
    c *= 2;
  } else {
    //заменить на противоположное
    a = a - a * 2;
    b = b - b * 2;
    c = c - c * 2;
  }
  //вывести все переменные
  alert(a);
  alert(b);
  alert(c);
}

//Задание No4.
let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");
let cur = 0;
let onePoint = Math.abs(c - a);
let twoPoint = Math.abs(b - a);
if (onePoint > twoPoint) {
  cur = b;
  alert(`Точка b = ${cur}`);
} else if (onePoint < twoPoint) {
  cur = c;
  alert(`Точка с = ${cur}`);
} else {
  alert("Условия несоблюдены");
}

//Задание No5.
let x = +prompt("Введите координаты по x");
let y = +prompt("Введите координаты по y");
if (x === 0 && y === 0) {
  alert(0);
} else if (x !== 0 && y !== 0) {
  alert(3);
} else {
  if (x === 0) {
    alert(1);
  } else if (y === 0) {
    alert(2);
  }
}

//Задание No6.
let x = +prompt("Введите координаты по x");
let y = +prompt("Введите координаты по y");
if (x > 0 && y > 0) {
  alert("Точка лежит в I координатной четверти");
} else if (x < 0 && y > 0) {
  alert("Точка лежит во II координатной четверти");
} else if (x < 0 && y < 0) {
  alert("Точка лежит в III координатной четверти");
} else {
  alert("Точка лежит в IV координатной четверти");
}

//Задание No7.
let x1 = +prompt("Введите координаты первой вершины по оси x");
let y1 = +prompt("Введите координаты первой вершины по оси y");
let x2 = +prompt("Введите координаты второй вершины по оси x");
let y2 = +prompt("Введите координаты второй вершины по оси y");
let x3 = +prompt("Введите координаты третьей вершины по оси x");
let y3 = +prompt("Введите координаты третьей вершины по оси y");
let x4 = 0;
let y4 = 0;
if (x1 === x2) {
  x4 = x3;
  if (y1 === y3) {
    y4 = y2;
  } else {
    y4 = y1;
  }
} else {
  if (x1 === x3) {
    x4 = x2;
    if (y1 === y2) {
      y4 = y3;
    } else {
      y4 = y1;
    }
  } else {
    x4 = x1;
    if (y1 === y3) {
      y4 = y2;
    } else {
      y4 = y3;
    }
  }
}
alert(`Координаты 4 вершины: x4 = ${x4} y4 = ${y4}`);
//честно говоря по математике в школе у меня было 6, так что задача была максимально сложная :)

//Задание No8.
let numYear = +prompt("Введите номер года");
if (numYear % 4 !== 0) {
  alert(`В этом году 365 дней`);
} else if (numYear % 100 !== 0) {
  alert(`В этом году 366 дней`);
} else if (numYear % 400 !== 0) {
  alert(`В этом году 365 дней`);
} else {
  alert(`В этом году 366 дней`);
}

//Задание No9.
let number = +prompt("Введите целое число");
if (number === 0) {
  alert("нулевое число");
} else if (number < 0) {
  if (number % 2) {
    alert("отрицательное нечетное число");
  } else {
    alert("отрицательное четное число");
  }
} else {
  if (number % 2) {
    alert("положительное нечетное число");
  } else {
    alert("положительное четное число");
  }
}

//Задание No10.
let number = +prompt("Введите число > 999");

if (number < 10) {
  if (number % 2 !== 0) {
    alert("нечетное однозначное число");
  } else {
    alert("четное однозначное число");
  }
} else if (number < 100) {
  if (number % 2 !== 0) {
    alert("нечетное двузначное число");
  } else {
    alert("четное двузначное число");
  }
} else {
  if (number % 2 !== 0) {
    alert("нечетное трехзначное число");
  } else {
    alert("четное трехзначное число");
  }
}

//Задание No11. Какие значения выведет цикл while?
//Префиксный вариант ++i: // 1 - 2 - 3 - 4 (в префиксном варианте мы получаем новое значение и цыкл закнчивается на 4)
let i = 0;
while (++i < 5) alert(i);
//Постфиксный вариант i++ // 1 - 2 - 3 - 4 - 5
let i = 0;
while (i++ < 5) alert(i);

//Задание No12. Какие значения выведет цикл for?
//Постфиксная форма: //1 - 2 - 3 - 4 (Цыкл for сначала проверяет условие, и только потом переходит к выполнению тела.)
for (let i = 0; i < 5; i++) alert(i);
//Префиксная форма: // 1 - 2 - 3 - 4
for (let i = 0; i < 5; ++i) alert(i);

//Задание No13. Выведите чётные числа
for (let i = 0; i <= 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

//Задание No14. Замените for на while
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

//Задание No15. Повторять цикл, пока ввод неверен
let number;
do {
  number = prompt("Введите число > 100?");
} while (number <= 100 && number);

//Задание No16. Вывести простые числа
let n = prompt("Введите число n");
nextOperation: for (let index = 2; index <= n; index++) {
  for (let a = 2; a < index; a++) {
    if (index % a == 0) continue nextOperation;
  }
  alert(index);
}

//Задание No17.
let a = +prompt("Введите число 1");
let b = +prompt("Введите число 2");
alert(((a + b) / 2).toFixed(0));

//Задание No18.
let a = +prompt("Введите число");
a = Math.pow(a, 2);
alert(a);

//Задание No19.
let a = +prompt("Введите число 1");
let b = +prompt("Введите число 2");
let c = +prompt("Введите число 3");
let moreNum = Math.max(a, b, c);
let lesserNum = Math.min(a, b, c);
let diff = moreNum - lesserNum;
alert(diff);

//Задание No20.
let a = +prompt("Введите число");
if (a % 2 == 0) {
  alert("Это четное число");
} else {
  alert("Это не четное число");
}

//Задание No21.
let a = prompt("Введите число");
console.log(typeof a);
let b = a.length;
let sum = 0;
for (let i = 0; i < b; i++) {
  sum += Number(a[i]);
}
alert(`Количество цифр: ${b} Сумма: ${sum}`);

//Задание No22.
const formula = 2.54;
let num = +prompt("Введите число");
let choice = confirm("Перевести из см в дюйм?");
if (choice === true) {
  let result = num / formula;
  alert(`${result.toFixed(4)} дм`);
} else {
  let result = num * formula;
  alert(`${result.toFixed(4)} см`);
}

//Задание No26. Объекты
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Задание No27. Объекты-константы
const user = {
  name: "John", // Cодержимое объекта менять можно
};

//Задание No28. Сумма свойств объекта
let num = prompt("Введите трехзначное число");
if (Number(num) % 2 == 0) {
  alert(Number(num[0]) + Number(num[1]) + Number(num[2]));
} else {
  let sum = 1;
  while (num) {
    sum *= num % 10;
    num = Math.floor(num / 10);
  }
  alert(sum);
}

let a = +prompt("Введите сторону a");
let b = +prompt("Введите сторону b");
let c = +prompt("Введите сторону c");
if (a + b > c && a + c > b && b + c > a) {
  alert("Это треугольник");
} else {
  alert("Треугольник невозможен");
}
