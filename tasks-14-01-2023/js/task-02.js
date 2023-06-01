// Задача 02
//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
};

function totalSalaries(objParam) {
    let sum = 0;
    for (const saleri of Object.values(objParam)) {
        sum += saleri;
    }
    return sum;
}

console.log(totalSalaries(salaries));
