import * as readlineSync from "readline-sync";

/*

  20.Заданы целые числа M и N и символ С.
  Написать процедуру , которая рисует на экране рамку размером M* N из символов С.( внутри рамки пусто).
  В основной программе применить процедуру 3 раза, построив несколько разных рамок.

*/

export const drawBorder = (M: number, N: number, C: string): void => {
  // Проверка входных данных
  if (M < 1 || N < 1) {
    console.log("Ошибка: размеры рамки должны быть положительными");
    return;
  }

  if (C.length !== 1) {
    console.log("Ошибка: символ рамки должен быть одним символом");
    return;
  }

  // Рисуем рамку
  for (let i = 0; i < M; i++) {
    let line = "";
    for (let j = 0; j < N; j++) {
      // Первая или последняя строка, либо первый или последний столбец
      if (i === 0 || i === M - 1 || j === 0 || j === N - 1) {
        line += C;
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

export const drawMultipleBorders = (): void => {
  console.log("\n=== Задание 20: Рисование рамок ===");

  const inputM = parseInt(readlineSync.question("Введите M: "));
  const inputN = parseInt(readlineSync.question("Введите N: "));
  const inputC = readlineSync.question("Введите символ С: ");

  // Первая рамка
  console.log(`\nРамка 1 (${inputM}x${inputN}, символ "${inputC}"):`);
  drawBorder(inputM, inputN, inputC);

  // Вторая рамка
  console.log('\nРамка 2 (7x3, символ "*"):');
  drawBorder(7, 3, "*");

  // Третья рамка
  console.log('\nРамка 3 (3x15, символ "+"):');
  drawBorder(3, 15, "+");
};
