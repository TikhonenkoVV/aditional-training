// Задача 01
//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) console.log(`${key}: ${user[key]}`);

console.log(user);
