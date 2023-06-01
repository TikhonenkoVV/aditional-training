// Задача 05
//Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

const makeDish = (shefName, dish) =>
    console.log(`${shefName} is cooking ${dish}`);

const makeShef = (shefName) => {
    const makeDish = (dish) => console.log(`${shefName} is cooking ${dish}`);
    return makeDish;
};

const mango = makeShef("Mango");
mango("Salad");
