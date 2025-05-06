import * as readlineSync from "readline-sync";

/*

  6. Определить является ли заданное шестизначное число счастливым.
  (счастливым называют такое шестизначное число ,
  в котором сумма первых его трех цифр равна сумме последних его трех цифр.)

*/

export const isLuckyNumber = (number: number): boolean => {
  if (number < 100000 || number > 999999) {
    return false;
  }

  const digits = String(number).split("").map(Number);
  const firstHalfSum = digits[0] + digits[1] + digits[2];
  const secondHalfSum = digits[3] + digits[4] + digits[5];

  return firstHalfSum === secondHalfSum;
};

export const runLuckyNumberCheck = (): void => {

  const input = readlineSync.question("Введите шестизначное число: ");
  const number = parseInt(input);

  if (isNaN(number) || input.length !== 6 || !/^\d+$/.test(input)) {
    console.log("Ошибка: введите корректное шестизначное число");
    return;
  }

  if (isLuckyNumber(number)) {
    console.log(`Число ${number} является "счастливым"!`);
  } else {
    console.log(`Число ${number} НЕ является "счастливым".`);
  }
};
