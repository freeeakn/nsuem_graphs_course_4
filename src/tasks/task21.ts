/*

  21. Напечатать 10 случайных трехзначных чисел , делящихся на 12.

*/

export const generateNumbersDivisibleBy12 = (): void => {
  console.log(
    "\n=== Задание 21: 10 случайных трехзначных чисел, кратных 12 ==="
  );

  const numbers: number[] = [];
  const min = 108; // Первое трехзначное число, кратное 12 (12×9=108)
  const max = 996; // Последнее трехзначное число, кратное 12 (12×83=996)

  while (numbers.length < 10) {
    // Генерируем случайное число в диапазоне [min, max]
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    // Проверяем кратность 12 и уникальность
    if (randomNum % 12 === 0 && !numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }

  // Сортируем числа для удобства просмотра
  numbers.sort((a, b) => a - b);

  // Выводим результат
  console.log("Сгенерированные числа:");
  console.log(numbers.join(", "));

  // Дополнительная проверка
  console.log("\nПроверка кратности 12:");
  numbers.forEach((num) => {
    console.log(`${num} / 12 = ${(num / 12).toFixed(0)} (остаток ${num % 12})`);
  });
};
