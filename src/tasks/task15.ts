import * as readlineSync from "readline-sync";

//TODO 15. повторяющиеся элементы массива

export const findDuplicateElements = (): void => {
  console.log("\n=== Задание 15: Поиск повторяющихся элементов ===");
  console.log("Введите элементы массива через пробел:");

  const input = readlineSync.question("Элементы: ");
  const elements = input.trim().split(/\s+/);

  if (elements.length === 0 || (elements.length === 1 && elements[0] === "")) {
    console.log("Ошибка: массив не может быть пустым");
    return;
  }

  // Создаем карту для подсчета встречаемости элементов
  const elementCount = new Map<string, number>();
  const duplicates = new Set<string>();

  elements.forEach((element) => {
    const count = (elementCount.get(element) || 0) + 1;
    elementCount.set(element, count);

    if (count > 1) {
      duplicates.add(element);
    }
  });

  if (duplicates.size === 0) {
    console.log("В массиве нет повторяющихся элементов");
  } else {
    console.log("Повторяющиеся элементы:", Array.from(duplicates).join(", "));

    console.log("\nПодробная статистика:");
    elementCount.forEach((count, element) => {
      if (count > 1) {
        console.log(`'${element}': ${count} раза`);
      }
    });
  }
};
