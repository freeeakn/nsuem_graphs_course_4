import * as readlineSync from "readline-sync";

export const calculateX = (a: number, b: number): number => {
  const numerator = 2 / a ** 2 + 25 + b;
  const denominator = Math.sqrt(b) + (a + b) / 2;
  return numerator / denominator;
};

export const calculateY = (a: number, b: number): number => {
  if (a === 0) {
    throw new Error("Значение 'a' не может быть нулем (деление на ноль)");
  }
  const numerator = Math.abs(a) + 2 * Math.sin(b);
  const denominator = 5.5 * a;
  return numerator / denominator;
};

export const runInteractiveCalculations = (): void => {
  console.log("\n=== Ввод данных для задания 2 ===");

  const a = parseFloat(readlineSync.question("Введите значение a: "));
  const b = parseFloat(readlineSync.question("Введите значение b: "));

  if (isNaN(a) || isNaN(b)) {
    console.log("Ошибка: Введите числовые значения");
    return;
  }

  try {
    console.log(`\nРезультаты для a = ${a}, b = ${b}:`);
    console.log(`x = ${calculateX(a, b).toFixed(4)}`);
    console.log(`y = ${calculateY(a, b).toFixed(4)}`);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};
