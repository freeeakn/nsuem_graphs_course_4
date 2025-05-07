import * as readlineSync from "readline-sync";

/*

  18. Есть два массива (возможно разной длины),
  отсортированные по неубыванию элементов.
  Соединить их содержимое в третий массив таким образом,
  чтобы этот массив также оказался отсортированным.

*/

export const mergeSortedArrays = (): void => {
  console.log("\n=== Задание 18: Слияние отсортированных массивов ===");

  const input1 = readlineSync.question(
    "Введите первый отсортированный массив (числа через пробел): "
  );
  const array1 = input1.trim().split(/\s+/).map(Number);

  const input2 = readlineSync.question(
    "Введите второй отсортированный массив (числа через пробел): "
  );
  const array2 = input2.trim().split(/\s+/).map(Number);

  if (array1.some(isNaN) || array2.some(isNaN)) {
    console.log("Ошибка: введите только числа");
    return;
  }

  // Проверка на сортировку
  if (!isSorted(array1) || !isSorted(array2)) {
    console.log("Ошибка: массивы должны быть отсортированы по неубыванию");
    return;
  }

  // Слияние массивов
  const mergedArray = mergeArrays(array1, array2);

  console.log("\nПервый массив:", array1.join(" "));
  console.log("Второй массив:", array2.join(" "));
  console.log("Результат слияния:", mergedArray.join(" "));
};

// Функция для проверки сортировки массива
const isSorted = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

// Функция для слияния двух отсортированных массивов
const mergeArrays = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
