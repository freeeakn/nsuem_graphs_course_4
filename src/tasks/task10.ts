import * as readlineSync from "readline-sync";

/*

  10. Последовательность Фибоначчи образуется так:
  первый и второй члены последовательности равны 1,
  каждый следующий равен сумме двух предыдущих (1;1;2;3;5;8;13;…)
  Найти :
  а)сумму всех чисел в последовательности  Фибоначчи , которые не превосходят 1000;
  б)первое число в последовательности  Фибоначчи . большее n ( значение n вводится с клавиатуры ).


*/
// Функция для генерации чисел Фибоначчи до заданного предела
const generateFibonacciUpTo = (limit: number): number[] => {
  const sequence: number[] = [1, 1];
  let next = sequence[0] + sequence[1];

  while (next <= limit) {
    sequence.push(next);
    next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence;
};

// Функция для нахождения первого числа Фибоначчи, большего n
const findFirstFibonacciGreaterThan = (n: number): number => {
  let a = 1,
    b = 1;

  if (n < 1) return 1;

  while (b <= n) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
};

export const runFibonacciTasks = (): void => {
  console.log("\n=== Задание 10: Работа с последовательностью Фибоначчи ===");

  // Часть а) Сумма чисел Фибоначчи ≤ 1000
  const fibUpTo1000 = generateFibonacciUpTo(1000);
  const sum = fibUpTo1000.reduce((acc, val) => acc + val, 0);
  console.log("\nа) Сумма чисел Фибоначчи ≤ 1000:", sum);
  console.log("Последовательность:", fibUpTo1000.join(", "));

  // Часть б) Первое число Фибоначчи > n
  const input = readlineSync.question("\nб) Введите число n: ");
  const n = parseInt(input);

  if (isNaN(n)) {
    console.log("Ошибка: введите корректное число");
    return;
  }

  const firstGreater = findFirstFibonacciGreaterThan(n);
  console.log(`Первое число Фибоначчи > ${n}: ${firstGreater}`);

  // Дополнительно показываем окрестности найденного числа
  let a = 1,
    b = 1;
  while (b <= firstGreater) {
    if (b > n) {
      console.log(`... ${a}, ${b} ...`);
      break;
    }
    const next = a + b;
    a = b;
    b = next;
  }
};
