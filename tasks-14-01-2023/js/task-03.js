// Задача 03
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

const letMeSeeYourName = (callback) => {
    const userName = prompt("Type yore name:");
    if (!userName) return;
    callback(userName);
};

const greet = (name) => console.log(`Hi ${name}`);

letMeSeeYourName(greet);
