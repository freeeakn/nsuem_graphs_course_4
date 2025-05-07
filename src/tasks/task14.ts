import * as readlineSync from "readline-sync";

/*

  14.Натуральное число называется совершенным,
  если оно равно сумме всех своих делителей,
  кроме самого этого числа (например , совершенным является  число 6-1+2+3).
  Напишите программу получения всех совершенных чисел из диапазона от 1 до N.

*/

const findPerfectNumbersUpTo = (N: number): number[] => {
  const perfectNumbers: number[] = [];

  // Известно, что все четные совершенные числа имеют вид 2^(p-1)*(2^p-1)
  // где 2^p-1 - простое число Мерсенна
  // Используем этот факт для оптимизации поиска

  for (let p = 2; ; p++) {
    const mersenne = Math.pow(2, p) - 1;
    if (mersenne > N) break;

    if (isPrime(mersenne)) {
      const perfect = Math.pow(2, p - 1) * mersenne;
      if (perfect > N) break;
      perfectNumbers.push(perfect);
    }
  }

  return perfectNumbers;
};

// Вспомогательная функция для проверки простоты числа
const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

export const runPerfectNumbersSearch = (): void => {
  console.log("\n=== Задание 14: Поиск совершенных чисел ===");

  const input = readlineSync.question("Введите число N: ");
  const N = parseInt(input);

  if (isNaN(N) || N < 1) {
    console.log("Ошибка: введите натуральное число ≥ 1");
    return;
  }

  const perfectNumbers = findPerfectNumbersUpTo(N);

  if (perfectNumbers.length === 0) {
    console.log(`В диапазоне от 1 до ${N} нет совершенных чисел`);
  } else {
    console.log(`Совершенные числа от 1 до ${N}:`);
    perfectNumbers.forEach((num) => {
      const divisors = getDivisors(num);
      console.log(`${num} = ${divisors.join(" + ")}`);
    });
  }
};

// Вспомогательная функция для получения делителей числа
const getDivisors = (num: number): number[] => {
  const divisors = [1];
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);
      const complement = num / i;
      if (complement !== i) {
        divisors.push(complement);
      }
    }
  }

  return divisors.sort((a, b) => a - b);
};
