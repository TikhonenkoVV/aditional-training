// Використовуючи конструкцію if...else
// напишіть код, який запитуватиме:
// "Яка офіціна назва JavaScript?".
// Якщо користувач вводить "ECMAScript",
// показати через alert "Вірно!",
// інакше відобразити "Не знаєте? ECMAScript!"

const question = prompt("Яка офіціна назва JavaScript?");

if (question === "ECMAScript") {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
