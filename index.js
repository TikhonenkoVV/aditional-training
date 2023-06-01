// ============EGOR============//
// const N = 25;
// const arr = Array.from({ length: N }, (_, index) => index + 1);

// const myArr = (arr) => {
//     let newArr = [];
//     let counter = 0;
//     arr.forEach((el) => {
//         if ((arr.indexOf(el) + 1) % 5 === 0) {
//             if (counter === 0 || counter === 4) {
//                 newArr.push("aaaaa");
//             } else newArr.push("abbba");
//             counter += 1;
//         }
//     });
//     return newArr;
// };

// const mySquare = myArr(arr);
// console.log(mySquare);
// console.log(arr);
// ============EGOR============//

// ======================Автоперевірка 44=====================
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

//рішення 1
// const names = [...books]
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .filter((el) => el.rating > MIN_BOOK_RATING)
//     .reduce((arr, author) => {
//         arr.push(author.author);
//         return arr;
//     }, []);

// рішення 2
// const names = [...books]
//     .filter((book) => book.rating > MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((first, second) => first.localeCompare(second));

// console.log(names);
// ======================Автоперевірка 44=====================
// foo();

// const foo = () => console.log("стрілочна");
// let x;
// const b = "qwert";
// function foo1(a) {
//     const b = a;
//     console.log(b);
// }

// console.log(b);
// foo1(20);

// Завдання 1

// Завдання 2
