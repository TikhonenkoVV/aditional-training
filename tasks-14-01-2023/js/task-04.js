// Задача 04
//Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

const makeProduct = (name, price, callback) => {
    const product = { name, price, id: Math.random() };
    callback(product);
};

const showProduct = (product) => console.table(product);

makeProduct("tomato", 100, showProduct);
