import * as readlineSync from "readline-sync";

export const processNumbers = (
  a: number,
  b: number,
  c: number,
  d: number
): [number, number, number, number] => {
  // Проверка условия a ≤ b ≤ c ≤ d
  if (a <= b && b <= c && c <= d) {
    const max = Math.max(a, b, c, d);
    return [max, max, max, max];
  }
  // Проверка условия a > b > c > d
  else if (a > b && b > c && c > d) {
    return [a, b, c, d];
  }
  // Во всех остальных случаях
  else {
    return [a ** 2, b ** 2, c ** 2, d ** 2];
  }
};

export const runNumberProcessing = (): void => {
  const a = parseFloat(readlineSync.question("Введите число a: "));
  const b = parseFloat(readlineSync.question("Введите число b: "));
  const c = parseFloat(readlineSync.question("Введите число c: "));
  const d = parseFloat(readlineSync.question("Введите число d: "));

  if ([a, b, c, d].some(isNaN)) {
    console.log("Ошибка: все значения должны быть числами");
    return;
  }

  const [newA, newB, newC, newD] = processNumbers(a, b, c, d);

  console.log("\nИсходные числа:", [a, b, c, d]);
  console.log("Результат обработки:", [newA, newB, newC, newD]);
};
