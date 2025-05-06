export const processSequence = (sequence: number[]): number[] => {
  if (sequence.length !== 26) {
    throw new Error("Последовательность должна содержать ровно 26 элементов");
  }

  const a1 = sequence[0];
  let multiplier: number;

  if (a1 >= 0) {
    const min = Math.min(...sequence);
    multiplier = min * min;
  } else {
    const max = Math.max(...sequence);
    multiplier = max * max;
  }

  return sequence.map((num) => num * multiplier);
};

export const generateRandomSequence = (): number[] => {
  return Array.from({ length: 26 }, () => {
    // Генерация чисел в диапазоне [-50, 50] с 2 знаками после запятой
    return parseFloat((Math.random() * 100 - 50).toFixed(2));
  });
};

export const runSequenceProcessing = (): void => {
  console.log("\n=== Задание 8: Обработка последовательности ===");

  const sequence = generateRandomSequence();
  console.log("Сгенерированная последовательность:", sequence);

  try {
    const processedSequence = processSequence(sequence);
    console.log("\nРезультат обработки:");

    const condition =
      sequence[0] >= 0
        ? `(умножено на квадрат наименьшего элемента: ${Math.min(
            ...sequence
          )}²)`
        : `(умножено на квадрат наибольшего элемента: ${Math.max(
            ...sequence
          )}²)`;

    console.log("\nУсловие обработки:", condition);
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};
