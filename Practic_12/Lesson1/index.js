function createCalendar(elem, year, month) {
  let mon = month - 1;
  let dates = new Date(year, mon);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  for (let i = 0; i < getDay(dates); i++) {
    table += "<td></td>";
  }
  while (dates.getMonth() == mon) {
    table += "<td>" + dates.getDate() + "</td>";

    if (getDay(dates) === 6) {
      // новая строка
      table += "</tr><tr>";
    }

    dates.setDate(dates.getDate() + 1);
  }

  // добавление ячеек
  if (getDay(dates) != 0) {
    for (let i = getDay(dates); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // закрытие таблицы
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 4);
