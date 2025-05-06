/*

  9.Даны 20 чисел , образующих неубывающую последовательность.
  Несколько чисел , идущих подряд равны между собой.
  Найти количество таких чисел.

*/

export const countConsecutiveDuplicates = (sequence: number[]): number => {
  if (sequence.length !== 20) {
    throw new Error("Последовательность должна содержать ровно 20 элементов");
  }

  let count = 0;
  let current = sequence[0];
  let currentCount = 1;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] === current) {
      currentCount++;
    } else {
      if (currentCount > 1) {
        count += currentCount;
      }
      current = sequence[i];
      currentCount = 1;
    }
  }

  // Добавляем последнюю группу
  if (currentCount > 1) {
    count += currentCount;
  }

  return count;
};

export const generateNonDecreasingSequence = (): number[] => {
  const sequence: number[] = [];
  let currentValue = Math.floor(Math.random() * 10); // Начальное значение

  for (let i = 0; i < 20; i++) {
    // С вероятностью 60% увеличиваем значение, с 40% оставляем прежним
    if (Math.random() < 0.6 && i > 0) {
      currentValue += Math.floor(Math.random() * 3) + 1;
    }
    sequence.push(currentValue);
  }

  return sequence;
};

export const runSequenceAnalysis = (): void => {
  console.log("\n=== Задание 9: Анализ неубывающей последовательности ===");

  const sequence = generateNonDecreasingSequence();
  console.log("Сгенерированная последовательность:", sequence);

  try {
    const duplicateCount = countConsecutiveDuplicates(sequence);
    console.log(
      "\nКоличество повторяющихся чисел, идущих подряд:",
      duplicateCount
    );

    // Дополнительная информация о последовательности
    const uniqueGroups = [];
    let current = sequence[0];
    let currentCount = 1;

    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] === current) {
        currentCount++;
      } else {
        uniqueGroups.push({ value: current, count: currentCount });
        current = sequence[i];
        currentCount = 1;
      }
    }
    uniqueGroups.push({ value: current, count: currentCount });

    console.log("\nГруппы повторяющихся чисел:");
    uniqueGroups.forEach((group) => {
      if (group.count > 1) {
        console.log(`Число ${group.value} повторяется ${group.count} раз(а)`);
      }
    });
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
};
