export const processArray = (
  arr: number[]
): {
  sumPositive: number;
  countNegative: number;
} => {
  let sumPositive = 0;
  let countNegative = 0;

  for (const num of arr) {
    if (num > 0) {
      sumPositive += num;
    } else if (num < 0) {
      countNegative++;
    }
  }

  return { sumPositive, countNegative };
};

export const generateRandomArray = (length: number = 10): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 20 - 10));
};

export const runArrayProcessing = (): void => {
  const array = generateRandomArray();
  console.log("Сгенерированный массив:", array);

  const result = processArray(array);
  console.log("Сумма положительных элементов:", result.sumPositive);
  console.log("Количество отрицательных элементов:", result.countNegative);
};
