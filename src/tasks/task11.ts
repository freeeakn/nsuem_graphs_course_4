import * as readlineSync from "readline-sync";

export const reverseNumber = (num: number): number => {
  const reversedString = Math.abs(num).toString().split("").reverse().join("");
  const reversedNum = parseInt(reversedString);

  return num < 0 ? -reversedNum : reversedNum;
};

export const runNumberReversal = (): void => {
  console.log("\n=== Задание 11: Обращение цифр числа ===");

  const input = readlineSync.question("Введите целое число: ");
  const num = parseInt(input);

  if (isNaN(num)) {
    console.log("Ошибка: введите корректное целое число");
    return;
  }

  const reversed = reverseNumber(num);
  console.log(`Число с обратным порядком цифр: ${reversed}`);

  console.log("\nПримеры:");
  const examples = [1234, -5678, 1000, 5, -9];
  examples.forEach((ex) => {
    console.log(`${ex} → ${reverseNumber(ex)}`);
  });
};
