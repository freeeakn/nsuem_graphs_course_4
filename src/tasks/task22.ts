/*

  22.Написать процедуры и функции для работы с массивом ( размерность массива – константа).
  - найти сумму элементов массива;
  -найти самое маленькое число в массиве ;
  - выписать элементы массива в обратном порядке ;
  - выписать нечетные элементы массива ;
  - все элементы массива сделать равным заданному числу;
  - распечатать элементы массива с индексами от k1доk2;
  - напечатать элементы массива, принадлежащие промежутку [a, b];
  - напечатать сумму элементов массива, принадлежащих промежутку [a, b];
  - заменить первое вхождение заданного элемента на другое число ;
  - заменить все вхождения заданного элемента на другое число ;
  - определить , сколько раз в массив входит заданный элемент;
  - найти максимальное нечетное число в массиве ;
  - поменять местами элементы массива, стоящие на заданных местах.


*/

const ARRAY_SIZE = 10; // Константа для размера массива

export class ArrayOperations {
  private array: number[];

  constructor(initialArray?: number[]) {
    this.array = initialArray || this.generateRandomArray();
  }

  // 1. Генерация случайного массива
  private generateRandomArray(): number[] {
    return Array.from({ length: ARRAY_SIZE }, () =>
      Math.floor(Math.random() * 100)
    );
  }

  // 2. Найти сумму элементов массива
  sum(): number {
    return this.array.reduce((acc, val) => acc + val, 0);
  }

  // 3. Найти минимальный элемент
  min(): number {
    return Math.min(...this.array);
  }

  // 4. Обратный порядок элементов
  reverse(): number[] {
    return [...this.array].reverse();
  }

  // 5. Нечетные элементы
  oddElements(): number[] {
    return this.array.filter((num) => num % 2 !== 0);
  }

  // 6. Заполнить массив одним значением
  fill(value: number): void {
    this.array = this.array.map(() => value);
  }

  // 7. Печать элементов с индексами от k1 до k2
  printRange(k1: number, k2: number): void {
    if (k1 < 0 || k2 >= ARRAY_SIZE || k1 > k2) {
      console.log("Некорректный диапазон индексов");
      return;
    }
    console.log(this.array.slice(k1, k2 + 1));
  }

  // 8. Элементы в промежутке [a, b]
  elementsInRange(a: number, b: number): number[] {
    return this.array.filter((num) => num >= a && num <= b);
  }

  // 9. Сумма элементов в промежутке [a, b]
  sumInRange(a: number, b: number): number {
    return this.array
      .filter((num) => num >= a && num <= b)
      .reduce((sum, num) => sum + num, 0);
  }

  // 10. Заменить первое вхождение элемента
  replaceFirst(oldValue: number, newValue: number): void {
    const index = this.array.indexOf(oldValue);
    if (index !== -1) {
      this.array[index] = newValue;
    }
  }

  // 11. Заменить все вхождения элемента
  replaceAll(oldValue: number, newValue: number): void {
    this.array = this.array.map((num) => (num === oldValue ? newValue : num));
  }

  // 12. Количество вхождений элемента
  countOccurrences(value: number): number {
    return this.array.filter((num) => num === value).length;
  }

  // 13. Максимальное нечетное число
  maxOdd(): number | null {
    const odds = this.array.filter((num) => num % 2 !== 0);
    return odds.length > 0 ? Math.max(...odds) : null;
  }

  // 14. Поменять местами элементы
  swap(pos1: number, pos2: number): void {
    if (pos1 < 0 || pos2 < 0 || pos1 >= ARRAY_SIZE || pos2 >= ARRAY_SIZE) {
      console.log("Некорректные позиции для обмена");
      return;
    }
    [this.array[pos1], this.array[pos2]] = [this.array[pos2], this.array[pos1]];
  }

  // 15. Печать массива
  print(): void {
    console.log("Текущий массив:", this.array);
  }
}

export const demonstrateArrayOperations = (): void => {
  console.log("\n=== Задание 22: Операции с массивами ===");

  const arrOps = new ArrayOperations([5, 3, 8, 1, 4, 2, 7, 3, 9, 6]);
  arrOps.print();

  console.log("\n1. Сумма элементов:", arrOps.sum());
  console.log("2. Минимальный элемент:", arrOps.min());
  console.log("3. Обратный порядок:", arrOps.reverse());
  console.log("4. Нечетные элементы:", arrOps.oddElements());

  console.log("\n5. Заполнение массива числом 10:");
  arrOps.fill(10);
  arrOps.print();

  // Восстановим массив для дальнейших демонстраций
  arrOps["array"] = [5, 3, 8, 1, 4, 2, 7, 3, 9, 6];

  console.log("\n6. Элементы с индексами от 2 до 5:");
  arrOps.printRange(2, 5);

  console.log(
    "\n7. Элементы в диапазоне [3, 7]:",
    arrOps.elementsInRange(3, 7)
  );
  console.log("8. Сумма элементов в [3, 7]:", arrOps.sumInRange(3, 7));

  console.log("\n9. Замена первого вхождения 3 на 10:");
  arrOps.replaceFirst(3, 10);
  arrOps.print();

  console.log("\n10. Замена всех вхождений 3 на 10:");
  arrOps.replaceAll(3, 10);
  arrOps.print();

  console.log(
    "\n11. Количество вхождений числа 10:",
    arrOps.countOccurrences(10)
  );
  console.log("12. Максимальное нечетное число:", arrOps.maxOdd());

  console.log("\n13. Обмен элементов на позициях 1 и 3:");
  arrOps.swap(1, 3);
  arrOps.print();
};
