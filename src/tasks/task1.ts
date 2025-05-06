/*
  1.В массиве хранится информация о максимальной скорости каждой из 40 марок легковых автомобилей.
  Определить скорости двух самых быстрых автомобилей.
  Задачу решить 
  а)без использования двух проходов по массиву,
  б) с использованием двух проходов по массиву.
*/

export const findTwoMaxOnePass = (speeds: number[]): [number, number] => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const speed of speeds) {
    if (speed > firstMax) {
      secondMax = firstMax;
      firstMax = speed;
    } else if (speed > secondMax) {
      secondMax = speed;
    }
  }

  return [firstMax, secondMax];
};

export const findTwoMaxTwoPasses = (speeds: number[]): [number, number] => {
  const firstMax = Math.max(...speeds);
  const secondMax = Math.max(...speeds.filter((s) => s !== firstMax));
  return [firstMax, secondMax];
};

export const generateTestData = (count: number = 40): number[] => {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * 300 + 100)
  );
};
