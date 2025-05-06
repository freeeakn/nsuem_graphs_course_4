import * as readlineSync from "readline-sync";

export const filterNumbersInRange = (numbers: number[]): number[] => {
  const lowerBound = 1.6;
  const upperBound = 3.8;
  return numbers.filter((num) => num >= lowerBound && num <= upperBound);
};

export const runIntervalFilter = (): void => {
  console.log("\n=== Задание 5: Фильтрация чисел в интервале [1.6, 3.8] ===");

  const numbers: number[] = [];
  for (let i = 0; i < 3; i++) {
    const input = readlineSync.question(`Введите число ${i + 1}: `);
    const num = parseFloat(input);
    if (isNaN(num)) {
      console.log("Ошибка: введите корректное число");
      return;
    }
    numbers.push(num);
  }

  const filteredNumbers = filterNumbersInRange(numbers);

  console.log("\nВведенные числа:", numbers);
  if (filteredNumbers.length > 0) {
    console.log("Числа в интервале [1.6, 3.8]:", filteredNumbers);
  } else {
    console.log("Нет чисел, принадлежащих интервалу [1.6, 3.8]");
  }
};
