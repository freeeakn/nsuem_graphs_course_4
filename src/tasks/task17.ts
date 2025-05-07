import * as readlineSync from "readline-sync";

/*

  17.Найти в массиве самый маленький элемент и,
  если он не стоит на первом месте, переставить его туда следующими способами:
  а)поменяв местами с первым элементом;
  б)освободив для него первое место, сдвинув нужные элементы вправо.
  Не меняя их порядка.

*/

export const processArrayWithMinElement = (): void => {
  console.log("\n=== Задание 17: Перестановка минимального элемента ===");
  console.log("Введите элементы массива через пробел:");

  const input = readlineSync.question("Элементы: ");
  const originalArray = input.trim().split(/\s+/).map(Number);

  if (originalArray.some(isNaN)) {
    console.log("Ошибка: введите только числа");
    return;
  }

  if (originalArray.length === 0) {
    console.log("Ошибка: массив не может быть пустым");
    return;
  }

  // Находим минимальный элемент и его индекс
  const minValue = Math.min(...originalArray);
  const minIndex = originalArray.indexOf(minValue);

  console.log("\nИсходный массив:", originalArray.join(" "));
  console.log(`Минимальный элемент: ${minValue} (позиция ${minIndex + 1})`);

  // Вариант а) Обмен местами с первым элементом
  if (minIndex !== 0) {
    const swapArray = [...originalArray];
    [swapArray[0], swapArray[minIndex]] = [swapArray[minIndex], swapArray[0]];
    console.log(
      "\nа) После обмена минимального с первым:",
      swapArray.join(" ")
    );
  } else {
    console.log("\nа) Минимальный элемент уже на первом месте");
  }

  // Вариант б) Сдвиг элементов с сохранением порядка
  if (minIndex !== 0) {
    const shiftArray = [...originalArray];
    // Удаляем минимальный элемент из текущей позиции
    shiftArray.splice(minIndex, 1);
    // Вставляем в начало
    shiftArray.unshift(minValue);
    console.log("б) После сдвига минимального в начало:", shiftArray.join(" "));
  } else {
    console.log("б) Минимальный элемент уже на первом месте");
  }

  console.log("\nСравнение методов:");
  console.log("- Метод (а) меняет элементы местами (1 операция)");
  console.log(
    "- Метод (б) сохраняет относительный порядок остальных элементов"
  );
};
