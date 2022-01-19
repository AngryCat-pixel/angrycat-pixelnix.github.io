//1. Выведите значение и текст выбранного пункта.
let selectedOption = genres.options[genres.selectedIndex];
console.log(`Значение: ${selectedOption.value}, 
Текст: ${selectedOption.text}`);

//2. Добавьте пункт: <option value="classic">Классика</option>.
let newOption = new Option("Классика", "classic");
genres.append(newOption);

//3. Сделайте его выбранным.
newOption.selected = true;
