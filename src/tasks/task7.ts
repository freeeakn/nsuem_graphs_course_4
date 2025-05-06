import * as readlineSync from "readline-sync";

/*

  7.Даны натуральные числа x  и y.
  Вычислить произведение x • y, используя лишь операцию сложения .

*/
export const multiplyUsingAddition = (x: number, y: number): number => {
  if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error("Оба числа должны быть натуральными");
  }

  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x;
  }
  return result;
};

export const runMultiplicationTask = (): void => {
  const x = parseInt(
    readlineSync.question("Введите первое натуральное число (x): ")
  );
  const y = parseInt(
    readlineSync.question("Введите второе натуральное число (y): ")
  );

  if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
    console.log("Ошибка: оба числа должны быть натуральными (целые > 0)");
    return;
  }

  try {
    const product = multiplyUsingAddition(x, y);
    console.log(`Результат умножения ${x} * ${y} = ${product}`);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};
