document.onclick = function (e) {
  // показывает координаты точки клика
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

//верхний левый, внешний угол (это просто).
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];

//нижний правый, внешний угол (тоже просто).
let answer2 = [coords.right, coords.bottom];

//верхний левый, внутренний угол (чуть сложнее).
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

//нижний правый, внутренний угол
let answer4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
];
console.log(answer1, answer2, answer3, answer4);
