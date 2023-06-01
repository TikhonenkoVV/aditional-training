// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case

const num = 1;

let result;

switch (num) {
    case 1:
        result = "Зима";
        break;
    case 2:
        result = "Весна";
        break;
    case 3:
        result = "Літо";
        break;
    case 4:
        result = "Осінь";
        break;
    default:
        result = "Введіть значення від 1 до 4";
}

console.log(result);
