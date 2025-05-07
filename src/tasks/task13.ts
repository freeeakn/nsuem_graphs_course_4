import * as readlineSync from "readline-sync";

/*

  13. Последовательность чисел вводится с клавиатуры.
  Количество чисел либо задается  до ввода последовательности,
  либо оно неизвестно, задается некоторый признак конца последовательности.
  В последовательности не менее двух чисел. Найти два наименьших числа среди
  всех членов последовательности и определить , на каких местах они стоят.

*/

export const findTwoSmallestNumbers = (): void => {
  console.log("\n=== Задание 13: Поиск двух наименьших чисел ===");
  console.log('Вводите числа по одному. Для завершения введите "end"');

  const numbers: number[] = [];
  let min1 = Infinity; // Первое наименьшее
  let min2 = Infinity; // Второе наименьшее
  let pos1 = -1; // Позиция первого наименьшего
  let pos2 = -1; // Позиция второго наименьшего

  while (true) {
    const input = readlineSync.question(
      `Введите число #${numbers.length + 1} (или "end" для завершения): `
    );

    if (input.toLowerCase() === "end") {
      if (numbers.length < 2) {
        console.log("Ошибка: нужно ввести минимум 2 числа");
        continue;
      }
      break;
    }

    const num = parseFloat(input);
    if (isNaN(num)) {
      console.log('Ошибка: введите число или "end"');
      continue;
    }

    numbers.push(num);
    const currentPos = numbers.length - 1;

    if (num < min1) {
      min2 = min1;
      pos2 = pos1;
      min1 = num;
      pos1 = currentPos;
    } else if (num < min2 && num !== min1) {
      min2 = num;
      pos2 = currentPos;
    }
  }

  console.log("\nВведенная последовательность:", numbers);
  console.log(`Первое наименьшее число: ${min1} (позиция ${pos1 + 1})`);
  console.log(`Второе наименьшее число: ${min2} (позиция ${pos2 + 1})`);
};
